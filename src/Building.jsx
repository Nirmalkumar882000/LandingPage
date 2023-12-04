/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/models/building.glb 
Author: Martin3DWork (https://sketchfab.com/Martin3dwork)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/building-02-a616f75dad1442f58dd1745117ce720a
Title: Building_02
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Building(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/building.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="358e01b9635b40cbae5120977144f0dcfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Camera" position={[893.836, 495.831, 1898.601]} rotation={[-Math.PI, 1.134, 2.871]} scale={100}>
                  <group name="Object_5" />
                </group>
                <group name="ventanas001" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 27.836]}>
                  <mesh name="ventanas001_Material014_0" geometry={nodes.ventanas001_Material014_0.geometry} material={materials['Material.014']} />
                  <mesh name="ventanas001_Material011_0" geometry={nodes.ventanas001_Material011_0.geometry} material={materials['Material.011']} />
                  <mesh name="ventanas001_Material015_0" geometry={nodes.ventanas001_Material015_0.geometry} material={materials['Material.015']} />
                  <mesh name="ventanas001_Material_0" geometry={nodes.ventanas001_Material_0.geometry} material={materials.Material} />
                  <mesh name="ventanas001_Material017_0" geometry={nodes.ventanas001_Material017_0.geometry} material={materials['Material.017']} />
                  <mesh name="ventanas001_paredes_exteriores_0" geometry={nodes.ventanas001_paredes_exteriores_0.geometry} material={materials.paredes_exteriores} />
                  <mesh name="ventanas001_Material019_0" geometry={nodes.ventanas001_Material019_0.geometry} material={materials['Material.019']} />
                  <mesh name="ventanas001_Material016_0" geometry={nodes.ventanas001_Material016_0.geometry} material={materials['Material.016']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/building.glb')
