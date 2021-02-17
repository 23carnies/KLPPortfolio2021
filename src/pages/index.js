import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import NamePlate from '../components/nameplate';
import { Flex, teal, violet, white, text } from '../components/utilities';
import { FootDiv } from '../components/footer';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Bird from '../images/phoenix.png';
import Flames from '../images/fire.png';
import background from '../images/skillsBackground.svg';

import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { IconContext } from '@react-icons/all-files/';


const LgGithub = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: '#fff' }}
    >
      <FootDiv bkColor="git">
        <FiGithub />
      </FootDiv>
    </IconContext.Provider>
   );
}
 
const LgLinkedIn = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: '#fff' }}
    >
      <FootDiv bkColor="link">
        <AiOutlineLinkedin />
      </FootDiv>
    </IconContext.Provider>
   );
}

const LgMail = () => {
  return (
    <IconContext.Provider 
      value={{ size: '55px', color: '#fff' }}
    >
      <FootDiv>
        <BiMailSend />
      </FootDiv>
    </IconContext.Provider>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NamePlate />
    <Main>
      {/* About Me Section */}
      <About>
        <Link to="/about">
          <p></p>
        </Link>
          <Phoenix src={Bird} alt="phoenix"/>
          <Fire src={Flames} alt="flames"/>
      </About>
      {/* Projects Section */}
      <Projects>
        <Link to="/projects">
          Stuff I've Built
        </Link>
        </Projects>
      {/* Contact Section */}
      <Contact>
        
          <div style={{display:'flex'}}>
            <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
            <a rel="noreferrer" target="_blank" href="mailto:karenlobinperkins@gmail.com" alt="Email logo, opens new email to Karen's gmail account"><LgMail /></a>
          </div>
        <Link to="/contact" style={{color:'#000'}}>
          I'm Available for Hire!
          I am looking for a Front End Engineering role at a team-focused company.
        </Link>
      
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
  ${Flex};
`;

const About = styled(Section)`
  ${Flex({fd:'column',ai:'space-around',jc:'center'})};
  /* height: 80%; */
  /* padding: 25px 0; */
  /* background: ${violet}; */
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  
  `;

const AboutText = styled(Link)`
  font: ${text};
  
  `;

const Phoenix = styled.img`
  width: 280px;
  margin-top: 20%;
  z-index: 10;
  transform: rotate(3deg) scaleX(-1);
`;

const Fire = styled.img`
  width: 33.33%;
  /* height: 50%; */
  position: absolute;
  left: 0;
  bottom: 38px;
  /* overflow: hidden; */

  z-index: 1;
`;
const Projects = styled(Section)`
  background-color: ${teal};
  background-image: url(${background})

`;
const Contact = styled(Section)`
  display: ${Flex({fd:'column'})};
  background: ${white};
  padding: 25px;
`;
