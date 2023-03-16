/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public\models\WawaOffice.glb --types --transform
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

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

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/WawaOffice-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.11, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.23, -2.2]} />
    </group>
  )
}

useGLTF.preload('/WawaOffice-transformed.glb')
