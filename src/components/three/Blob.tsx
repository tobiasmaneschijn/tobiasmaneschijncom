import { extend, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GradientShaderMaterial } from "./materials/GradientMaterial";

const blobGeometry = new THREE.SphereGeometry(1, 128, 128);


interface BlobProps {}

const Blob: React.FC<BlobProps> = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Update the uniform when the window is resized
  const { size } = useThree();
  useEffect(() => {
    if(!materialRef.current) return;
    materialRef.current.uniforms.u_resolution.value = new THREE.Vector2(
      size.width,
      size.height
    );
  }, [size]);

  return (
    <mesh
      geometry={blobGeometry}
      material={materialRef.current!}
      material-vertexShader={GradientShaderMaterial.vertexShader}
      material-fragmentShader={GradientShaderMaterial.fragmentShader}
    />
  );
};

export default Blob;
