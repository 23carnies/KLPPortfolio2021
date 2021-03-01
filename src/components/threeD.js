import React, { useRef, useState } from "react";

import Sphere from '../components/sphere'
import { Canvas, useRender, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { a, useSpring } from 'react-spring/three';
import { FontLoader } from 'three';
import {Roboto} from '../components/utilities/roboto.json'

extend({ OrbitControls });

const Text = (props) => {
  // const loader = new FontLoader();
  const font = new FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 2,
    height: 1
  };

  return (
    <mesh castShadow={true}>
      <textGeometry attach='geometry' args={['PROJECTS', textOptions]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  )
}


function Plane() {
    return (
      <mesh 
        receiveShadow={true}
        rotation={[-Math.PI / 2, 0,0]} 
        position={[0,-5,0]}>
        <planeBufferGeometry attach="geometry" args={[10,10]}/>
        <meshStandardMaterial attach="material" color="#6e6e6e" />
      </mesh>
    )
  }

  const Zoom = () => {
    const { gl, camera } = useThree();
    useSpring({
      from: {
        z: 30,
      },
      x: 1,
      y: 0,
      z: 3.4,
      onFrame: ({x,y,z}) => {
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
      },
    });
    return (
      <orbitControls 
        enableZoom={true}
        enablePan={false}
        target={[0,0,0]}
        args={[camera,gl.domElement]}
      />
    )
  }


 
const Scene = () => {
    const {
      camera,
      gl: {
        domElement
      }
    } = useThree()

    return ( 
        <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={0.7} position={[-10,0,-20]} /> 
            <pointLight intensity={1.3} position={[0,-10,0]} />
            <directionalLight 
              castShadow={true}
              position={[0,10,0]} 
              intensity={1.5} 
              shadow-mapSize-shadowMapWidth={1024} 
              shadow-camera-far={50}  
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            {/* <spotLight castShadow={true} intensity={0.4} position={[0,10,4]} />  */}
            {/* <Text /> */}
            <Sphere rotation={[10,10,0]} position={[0,0,0]}/>
            <Sphere rotation={[10,20,0]} position={[3,2,0]}/>
            {/* <Plane /> */}
            {/* <orbitControls args={[ camera, domElement ]}/> */}
            <Zoom/>
        </>
     );
}

        {/* <Canvas 
          style={{width: '90%'}}
          // camera={{ position: [-5,2,10], fov: 60 }}
          >
          <Scene style={{width:'100%'}}/>
        </Canvas> */}