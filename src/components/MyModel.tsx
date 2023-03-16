// Office.tsx

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

type GLTFResult = GLTF & {
    nodes: {
      ['01_office']: THREE.Mesh
      ['02_library']: THREE.Mesh
      ['03_attic']: THREE.Mesh
    }
    materials: {
      ['01']: THREE.MeshStandardMaterial
      ['02']: THREE.MeshStandardMaterial
      ['03']: THREE.MeshStandardMaterial
    }
  }
  
type OfficeProps = JSX.IntrinsicElements["group"];

export function Office(props: OfficeProps): JSX.Element {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb") as GLTFResult; 
  const ref = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;
  const tl = useRef<gsap.core.Timeline>();
  const libraryRef = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;
  const atticRef = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;

  const scroll = useScroll();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (!libraryRef.current) return;
    if (!atticRef.current) return;
    tl.current = gsap.timeline();

    tl.current
      .to(ref.current?.position, {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      })
      .to(ref.current?.rotation, { duration: 1, x: 0, y: Math.PI / 6, z: 0 })
      .to(ref.current?.rotation, { duration: 1, x: 0, y: -Math.PI / 6, z: 0 })
      .to(ref.current?.position, { duration: 1, x: -1, z: 2 })
      .to(ref.current?.position, { duration: 1, x: 1, z: 2 })
      .from(libraryRef.current?.position, { duration: 0.5, x: -2 })
      .from(libraryRef.current?.rotation, { duration: 0.5, y: -Math.PI / 2 })
      .from(atticRef.current?.position, { duration: 1.5, y: 2 })
      .from(atticRef.current?.rotation, { duration: 0.5, y: Math.PI / 2 })
      .from(atticRef.current?.position, { duration: 0.5, z: -2 });
  }, []);

 

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh
            geometry={nodes["02_library"].geometry}
            material={materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/WawaOffice.glb");
