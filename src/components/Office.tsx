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
