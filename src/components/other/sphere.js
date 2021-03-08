import React, {useState, useRef} from 'react';
import { Canvas, useRender, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { a, useSpring } from 'react-spring/three';
import { red2, yellow3, orange1, orange2, violet } from '../utilities'

const Sphere = (props) => {
    // const { size } = useSpring({
    //   size: isBig ? [1.5,1.5,1.5] : [1,1,1]
    // })
    const [isBig, setIsBig] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();

    const { size } = useSpring({
        size: isBig ? [1.5,1.5,1.5] : [1,1,1]
    })

    useRender(() => {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
      ref.current.geometry.center()
    })
    
    const color = isHovered ? `${orange2}` : `${yellow3}`;
    
    return ( 
        <a.mesh 
          castShadow={true}
          {...props}
          ref={ref}
          scale={size}
          onClick={() => setIsBig(!isBig)}
          onPointerOut={() => setIsHovered(false)}
          onPointerOver={() => setIsHovered(true)}
        >
          <sphereBufferGeometry attach="geometry" args={[1.25,8,8]}/>
          <meshPhongMaterial
            flatShading={true}
            roughness={0.7}
            metalness={7}
            shininess={65}
            attach="material"
            color={color}
          />
          console.log('text', )
        </a.mesh>
    );
}

export default Sphere;