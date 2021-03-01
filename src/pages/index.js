import React, { useRef, useState } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import NamePlate from '../components/nameplate';
import SmallCard from '../components/smProjectCard';
// import SmallCard from '../components/projectCard';
import { Flex, yellow1, yellow2, yellow3, orange1, orange2, orange3, red1, red2, red3, violet, white, black, text, boldType } from '../components/utilities';
import { FootDiv, LgGithub, LgLinkedIn, LgMail } from '../components/footer';

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
          <h4>Find out more<br/> about me here</h4>
        </Link>
          <Phoenix src={Bird} alt="phoenix"/>
          <Quote>"Our greatest glory is not in never failing, but in rising every time we fall." <br/><i>--Confucious</i></Quote>
      </About>
          <Fire src={Flames} alt="flames"/>

      {/* Projects Section */}
      <Projects>
        <Link to="/projects">
          <h3>I built this...</h3>
        </Link>
          {/* <SmallCard /> */}
          <Quote>Check out more projects here.</Quote>

        </Projects>

      {/* Contact Section */}
      <Contact>
          <div style={{display:'flex'}}>
            <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
            <a rel="noreferrer" target="_blank" href="mailto:karenlobinperkins@gmail.com" alt="Email logo, opens new email to Karen's gmail account"><LgMail /></a>
          </div>
          <h4>I'm Available<br/> for Hire!</h4>
        <Link to="/contact">
          <h4>Email me here.</h4>
        </Link>
          <Quote>I am looking for a Front End Engineering role at a team-focused company.</Quote>
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
  padding: 0 20px;
  font: ${boldType};
  z-index: 15;
  grid-row: 3/span 1;
`;

const Fire = styled.img`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3.6%;
  /* grid-row: 3/span 3; */
  position: absolute;
  left: 4px;
  bottom: 62px;
  z-index: 1;
`;

const Projects = styled(Section)`
  ${Flex({fd:'column'})};
  background: linear-gradient(to bottom, ${yellow1} 8%, ${yellow3} 52%, ${orange2} 100%);
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  position: relative;
  /* background-image: url(${background});
  background-position: center;
  background-size: 100%; */
`;

const Contact = styled(Section)`
  display: ${Flex({fd:'column'})};

  /* background: linear-gradient(to bottom, ${yellow1} 8%, ${yellow3} 52%, ${orange2} 100%); */
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  padding: 25px;
`;
