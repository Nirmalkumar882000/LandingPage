import { OrbitControls, useTexture } from '@react-three/drei'
import React from 'react'

function Experiance() {
    
  return (
    <mesh>
      <OrbitControls/>
      <ambientLight/>
      <sphereGeometry/>
      <meshNormalMaterial/>
    </mesh>
   
  )
}

export default Experiance
