/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/macbook.glb --types --transform --simplify
Author: AR Quick Look USDZ (https://sketchfab.com/pewcus-tunbek-4Buvso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/macbook-air-m1-chip-silver-5b40cae179e745ea96cb9d409812a024
Title: Macbook Air M1 Chip Silver
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {editable as e} from '@theatre/r3f'
import { animated, useSpring } from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    BzNfMMFMUvENCVB: THREE.Mesh
    vAGUyiVXfoNCfiz: THREE.Mesh
    knmwBVvqKBprdhy: THREE.Mesh
    IYquytLCepLmUBo: THREE.Mesh
    XzIjLarnJovNeFY: THREE.Mesh
    TyqbjvAzBnHiKwb: THREE.Mesh
    DghamaUxTHefQMN: THREE.Mesh
    wBBInSfLdDJGZAT: THREE.Mesh
    MufZdDNbnijUuDI: THREE.Mesh
    dzdDbHwlhsKhKXE: THREE.Mesh
    zmyDIvIISmVcrBw: THREE.Mesh
    QFkVghDULzcFGVS: THREE.Mesh
    DBvXeGikYLUKwdH: THREE.Mesh
    AwlBoBERHXitENF: THREE.Mesh
    FxYJZRjJWVjYwLV: THREE.Mesh
    efIPqtkSgQqIhbu: THREE.Mesh
    myHPgRcFLsxMInV: THREE.Mesh
    vmspsaCrmgKKjDd: THREE.Mesh
    chqYjnnQUYDygUd: THREE.Mesh
    ZbOWBLfcdfJLGbf: THREE.Mesh
    qtSHRxgTTtHDvvz: THREE.Mesh
    GuLDLtucEkhptAy: THREE.Mesh
    iPaYIdfHAoErrDD: THREE.Mesh
    tJeThulAohRVCYu: THREE.Mesh
    XqwOTtPISptJqzk: THREE.Mesh
    vyTbhVpPBeJrZxo: THREE.Mesh
    AUMLEhzRIkXUmsX: THREE.Mesh
    TkULcWkLJtogGVS: THREE.Mesh
    xJpdzOlweWAHqYU: THREE.Mesh
    TFsPkHBGmohYDUF: THREE.Mesh
    pcpUMJfNezWkOrK: THREE.Mesh
    vCoMumYuFVRrDxl: THREE.Mesh
    HzLAtwpaEQrTUta: THREE.Mesh
    tThJTMCDmnrUEvB: THREE.Mesh
    MXSRHoWxOJGMjpX: THREE.Mesh
    NZXezpncDrTVPYd: THREE.Mesh
    NfMmOpMNmolpLfw: THREE.Mesh
    TVhBYZaRqtFURFF: THREE.Mesh
  }
  materials: {
    aqhAfpkxnZPmIhk: THREE.MeshStandardMaterial
    TQlUdQskMqFOeNF: THREE.MeshStandardMaterial
    ulJMfFlutqmNQMW: THREE.MeshStandardMaterial
    XmFnkDCORGzfeME: THREE.MeshStandardMaterial
    RyMGdvvvrICYPYi: THREE.MeshStandardMaterial
    QvIzXEFfzNggOmB: THREE.MeshStandardMaterial
    peGpnBqcYHYUYsw: THREE.MeshStandardMaterial
    fNwAJBobjIFRfvB: THREE.MeshStandardMaterial
    ZRtDNbbFJTtCHrm: THREE.MeshStandardMaterial
    sQFBWaBkjsgwGvu: THREE.MeshStandardMaterial
    FXtoXdXSZfIeavz: THREE.MeshStandardMaterial
    oERDOwdFTcMQzDv: THREE.MeshStandardMaterial
    OthLhWgjvJJXXXx: THREE.MeshStandardMaterial
    initialShadingGroup: THREE.MeshStandardMaterial
    zSTXkYgEDkTgmAG: THREE.MeshStandardMaterial
    stkDfiDJRcgomRA: THREE.MeshStandardMaterial
    NYJQUGhFFttpmSc: THREE.MeshStandardMaterial
    FxVDqFpCAhktJsF: THREE.MeshStandardMaterial
    uzwDFWlQEbgKaKk: THREE.MeshStandardMaterial
    TUaXhUUzDBaiMXN: THREE.MeshStandardMaterial
    HOLRHAuxFvQaQOG: THREE.MeshStandardMaterial
    vfSIsEZWCUAlBZY: THREE.MeshStandardMaterial
    ICUyIsjyBwzbuKl: THREE.MeshStandardMaterial
    ToljNQRLmTtuwNl: THREE.MeshStandardMaterial
  }
}

export function MacBook(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/macbook-transformed.glb') as GLTFResult

  const {opacity: materialOpacity} = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  

  return (
    <group {...props} dispose={null} >
      <e.group  theatreKey='macbook' scale={1} position={[0,-40,0]}>
        <mesh geometry={nodes.NZXezpncDrTVPYd.geometry} material={materials.ToljNQRLmTtuwNl}  />
        <mesh geometry={nodes.NfMmOpMNmolpLfw.geometry} material={materials.NYJQUGhFFttpmSc} />
        <mesh geometry={nodes.TVhBYZaRqtFURFF.geometry} material={materials.aqhAfpkxnZPmIhk} />
        <mesh geometry={nodes.BzNfMMFMUvENCVB.geometry} material={materials.aqhAfpkxnZPmIhk} />
        <mesh geometry={nodes.vAGUyiVXfoNCfiz.geometry} material={materials.TQlUdQskMqFOeNF} />
        <mesh geometry={nodes.knmwBVvqKBprdhy.geometry} material={materials.ulJMfFlutqmNQMW} />
        <mesh geometry={nodes.IYquytLCepLmUBo.geometry} material={materials.XmFnkDCORGzfeME} />
        <mesh geometry={nodes.XzIjLarnJovNeFY.geometry} material={materials.RyMGdvvvrICYPYi} />
        <mesh geometry={nodes.TyqbjvAzBnHiKwb.geometry} material={materials.QvIzXEFfzNggOmB} />
        <mesh geometry={nodes.DghamaUxTHefQMN.geometry} material={materials.peGpnBqcYHYUYsw} />
        <mesh geometry={nodes.wBBInSfLdDJGZAT.geometry} material={materials.fNwAJBobjIFRfvB} />
        <mesh geometry={nodes.MufZdDNbnijUuDI.geometry} material={materials.ZRtDNbbFJTtCHrm} />
        <mesh geometry={nodes.dzdDbHwlhsKhKXE.geometry} material={materials.sQFBWaBkjsgwGvu} />
        <mesh geometry={nodes.zmyDIvIISmVcrBw.geometry} material={materials.FXtoXdXSZfIeavz} />
        <mesh geometry={nodes.QFkVghDULzcFGVS.geometry} material={materials.oERDOwdFTcMQzDv} />
        <mesh geometry={nodes.DBvXeGikYLUKwdH.geometry} material={materials.OthLhWgjvJJXXXx} />
        <mesh geometry={nodes.AwlBoBERHXitENF.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.FxYJZRjJWVjYwLV.geometry} material={materials.zSTXkYgEDkTgmAG} />
        <mesh geometry={nodes.efIPqtkSgQqIhbu.geometry} material={materials.stkDfiDJRcgomRA} />
        <mesh geometry={nodes.myHPgRcFLsxMInV.geometry} material={materials.NYJQUGhFFttpmSc} />
        <mesh geometry={nodes.vmspsaCrmgKKjDd.geometry} material={materials.aqhAfpkxnZPmIhk} />
        <mesh geometry={nodes.GuLDLtucEkhptAy.geometry} material={materials.TUaXhUUzDBaiMXN} />
        <mesh geometry={nodes.iPaYIdfHAoErrDD.geometry} material={materials.HOLRHAuxFvQaQOG} />
        <mesh geometry={nodes.tJeThulAohRVCYu.geometry} material={materials.vfSIsEZWCUAlBZY} />
        <mesh geometry={nodes.XqwOTtPISptJqzk.geometry} material={materials.OthLhWgjvJJXXXx} />
        <mesh geometry={nodes.vyTbhVpPBeJrZxo.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.AUMLEhzRIkXUmsX.geometry} material={materials.peGpnBqcYHYUYsw} />
        <mesh geometry={nodes.TkULcWkLJtogGVS.geometry} material={materials.ICUyIsjyBwzbuKl} />
        <mesh geometry={nodes.xJpdzOlweWAHqYU.geometry} material={materials.ICUyIsjyBwzbuKl} />
        <mesh geometry={nodes.TFsPkHBGmohYDUF.geometry} material={materials.NYJQUGhFFttpmSc} />
        <mesh geometry={nodes.pcpUMJfNezWkOrK.geometry} material={materials.NYJQUGhFFttpmSc} />
        <mesh geometry={nodes.vCoMumYuFVRrDxl.geometry} material={materials.NYJQUGhFFttpmSc} />
        <mesh geometry={nodes.HzLAtwpaEQrTUta.geometry} material={materials.aqhAfpkxnZPmIhk} />
        <mesh geometry={nodes.chqYjnnQUYDygUd.geometry} material={materials.FxVDqFpCAhktJsF} />
        <mesh geometry={nodes.ZbOWBLfcdfJLGbf.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.qtSHRxgTTtHDvvz.geometry} material={materials.uzwDFWlQEbgKaKk} />
        <mesh geometry={nodes.tThJTMCDmnrUEvB.geometry} material={materials.ToljNQRLmTtuwNl} />
        <mesh geometry={nodes.MXSRHoWxOJGMjpX.geometry} material={materials.ToljNQRLmTtuwNl} />
      </e.group>
    </group>
  )
}

useGLTF.preload('/models/macbook-transformed.glb')
