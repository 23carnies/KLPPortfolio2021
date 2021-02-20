import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import NamePlate from '../components/nameplate';
import { Flex, yellow1, yellow3, orange2, orange3, violet, white, black, text, boldType } from '../components/utilities';
import { FootDiv, LgGithub, LgLinkedIn, LgMail } from '../components/footer';
import { ThreeD } from '../components/ThreeD';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Bird from '../images/phoenix.svg';
import Flames from '../images/fire.svg';
import background from '../images/skillsBackground.svg';

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
          <h3>Stuff I've Built</h3>
        </Link>
          {/* <ThreeD /> */}
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
  background-image: url(${background});
  background-position: center;
  background-size: 100%;
  
  `;
  const Contact = styled(Section)`
  display: ${Flex({fd:'column'})};
  background: linear-gradient(to bottom, ${yellow1} 8%, ${yellow3} 52%, ${orange2} 100%);
  padding: 25px;
`;
