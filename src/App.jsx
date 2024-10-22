import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import "./style.css"
import { PerspectiveCamera, PositionalAudio, CameraControls, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { BlurPass,BlendFunction,GlitchMode, Resizer, KernelSize, Resolution } from 'postprocessing'

import Cyl from './Cyl'

const App = () => {
  return (
    <>
    <Canvas flat camera={{ position: [0, -2, 13] ,fov:65 }}>
    <OrbitControls dampingFactor={.01} enableZoom={false}/>
    <ambientLight intensity={1.9}/>
    <directionalLight position={[1, 10, 10]} intensity={0.5}/>
    <pointLight position={[5, -20, 5]} intensity={ 2 }/>
    {/* <CameraControls/> */}
    <Cyl/>
    <EffectComposer>
    <Bloom
    mipmapBlur
    intensity={3.0} // The bloom intensity.
    luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
  />
    <Vignette
    darkness={0.8} // The darkness of the vignette. Range is [0, 1].
    blur={.5} // The blur radius.
    />
    <Noise 
      premultiply={true} // enables or disables noise premultiplication
      blendFunction={BlendFunction.ADD} // blend mode
    />
    <Glitch
    delay={[1.4, 4]} // min and max glitch delay
    duration={[0.6, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={.9} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  />
    </EffectComposer>
    </Canvas>
    <div className='select-none w-full h-fit bg-blend-multiply backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400'>
      <h1 className='text-8xl capitalize font-bold tracking-tighter leading-none text-center drop-shadow-2xl'>Cylindrical</h1>
      <h1 className='text-8xl capitalize font-bold tracking-tighter leading-none text-center'>work showcase</h1>
    </div>
    </>

  )
}

export default App