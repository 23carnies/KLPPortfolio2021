import React, { useRef, useState } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import NamePlate from '../components/nameplate';
import Sphere from '../components/sphere'
import { Flex, yellow1, yellow2, yellow3, orange1, orange2, orange3, red1, red2, red3, violet, white, black, text, boldType } from '../components/utilities';
import { FootDiv, LgGithub, LgLinkedIn, LgMail } from '../components/footer';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Bird from '../images/phoenix.svg';
import Flames from '../images/fire.svg';
import background from '../images/skillsBackground.svg';

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

// function Plane() {
//   return (
//     <mesh 
//       receiveShadow={true}
//       rotation={[-Math.PI / 2, 0,0]} 
//       position={[0,-5,0]}>
//       <planeBufferGeometry attach="geometry" args={[10,10]}/>
//       <meshStandardMaterial attach="material" color="#6e6e6e" />
//     </mesh>
//   )
// }

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NamePlate />
    <Main>
      
      {/* About Me Section */}
      <About>
        <Link to="/about">
          <h3>Find out more about me here</h3>
          {/* <p>I believe in the power to recreate yourself, to refactor your life. As an Atlanta native, I am familiar
            with the symbol of the phoenix. 
          </p> */}
        </Link>
          <Phoenix src={Bird} alt="phoenix"/>
          <Quote>"Our greatest glory is not in never failing, but in rising every time we fall." <br/><i>--Confucious</i></Quote>
          <Fire src={Flames} alt="flames"/>
      </About>

      {/* Projects Section */}
      <Projects>
        <Link to="/projects">
          <h3>I built this...</h3>
          <p>Check out projects I'm proud of here.</p>
        </Link>
        <Canvas 
          style={{width: '90%'}}
          // camera={{ position: [-5,2,10], fov: 60 }}
          >
          <Scene style={{width:'100%'}}/>
        </Canvas>
        </Projects>

      {/* Contact Section */}
      <Contact>
          <div style={{display:'flex'}}>
            <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
            <a rel="noreferrer" target="_blank" href="mailto:karenlobinperkins@gmail.com" alt="Email logo, opens new email to Karen's gmail account"><LgMail /></a>
          </div>
        <Link to="/contact" style={{color:`${black}`}}>
          <h3>I'm Available for Hire!</h3>
        </Link>
          <p>I am looking for a Front End Engineering role at a team-focused company.</p>
      </Contact>

    </Main>
  </Layout>
)

export default IndexPage;

const Main = styled.article`
  ${Flex};
`;

const Section = styled.section`
  height: 75vh;
  width: 33.33vw;
  border: 5px solid ${white};
  ${Flex};
`;

const About = styled(Section)`
  /* ${Flex({fd:'column',ai:'space-around',jc:'center'})}; */
  display: grid;
  grid-template-rows: repeat(3,1fr);
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  
  `;

const AboutText = styled(Link)`
  font: ${text};
  grid-row: 1/span 1;
  padding: 0 10px;
  `;

const Phoenix = styled.img`
  width: 280px;
  grid-row: 2/span 1;
  z-index: 10;
  transform: rotate(5deg) scaleX(-1);
  margin: 0 auto;
  `;

const Quote = styled.p`
  color: ${black};
  text-align: center;
  padding: 0 10px;
  font: ${boldType};
  z-index: 15;
  grid-row: 3/span 1;
  `;

const Fire = styled.img`
  width: 33%;
  margin: 0 auto;
  margin-bottom: 2.9%;
  grid-row: 3/span 1;
  position: absolute;
  left: 0;
  bottom: 62px;
  z-index: 1;
`;

const Projects = styled(Section)`
  ${Flex({fd:'column'})};
  background-image: url(${background});
  background-position: center;
  background-size: 100%;
`;

const Contact = styled(Section)`
  display: ${Flex({fd:'column'})};
  background: linear-gradient(to bottom, ${yellow1} 8%, ${yellow3} 52%, ${orange2} 100%);
  padding: 25px;
`;
