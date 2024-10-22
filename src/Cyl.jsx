import React, { useRef } from 'react'
import { PerspectiveCamera, PositionalAudio, CameraControls, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


const Cyl = () => {
  let tex = useTexture("../public/image.png")
  let cyl = useRef(null)
  useFrame((state,delta)=>{
    cyl.current.rotation.y += delta*0.6
  })
  return (
    <group rotation={[0,1.4,0.4]}>
        <mesh ref={cyl}>
            <cylinderGeometry args={[6,6,10,200,200,true]}/>
            <meshStandardMaterial map={tex} transparent metalness={.4} roughness={.5} side={THREE.DoubleSide}/>
        </mesh>
    </group>
  )
}

export default Cyl