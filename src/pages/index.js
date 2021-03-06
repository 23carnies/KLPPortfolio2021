import React from "react";
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Flex, below, yellow3, violet, black, boldType, descript } from '../components/utilities';
import { LgGithub, LgLinkedIn, LgMail } from '../components/utilities/icons';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Bird from '../images/phoenix.svg';
import Flames from '../images/fire.svg';

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    {/* <NamePlate /> */}
    <Main>
      
      {/* About Me Section */}
      <About>
        <Link to="/about">
          <h4>Find out more<br/> about me here</h4>
        </Link>
          <Phoenix src={Bird} alt="phoenix"/>
          <Text type="quote">"Our greatest glory is not in never failing, but in rising every time we fall." <br/><i>--Confucious</i></Text>
      </About>
          <Fire src={Flames} alt="flames"/>

      {/* Projects Section */}
      <Projects>
        <Link to="/projects">
          <h3>I built this...</h3>
        </Link>
        <Tux>
          <TuxImg src="https://i.imgur.com/P0dkuGz.png"/>
          <Text descript>t.ux is the original product from theCOOP. I spearheaded the front end design implementation constructing a styled component library for the project and am in the process of implementing WAI-ARIA accessibility standards.</Text>
          <Link to="https://github.com/23carnies/tux"><Text github>t.ux Github repo</Text></Link>
        </Tux>
          {/* <SmallCard /> */}
          <Link to="/projects"><Text projects type="more">Check out more projects here.</Text></Link>

        </Projects>

      {/* Contact Section */}
      <Contact>
          <ContactDiv>
            <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
            <a rel="noreferrer" target="_blank" href="mailto:karenlobinperkins@gmail.com" alt="Email logo, opens new email to Karen's gmail account"><LgMail /></a>
          </ContactDiv>
          <h4>I'm Available<br/> for Hire!</h4>
        <Link to="/contact">
          <h4>Email me here.</h4>
        </Link>
          <Text type="more">I am looking for a Front End Engineering<br/> role at a team-focused company.</Text>
      </Contact>

    </Main>
  </Layout>
)

export default IndexPage;

const Main = styled.section`
  ${Flex};
  ${below.medium`
    ${Flex({fd:'column'})}
  `}
`;

const Section = styled.section`
  height: 75vh;
  width: 33.33vw;
  ${Flex};
  ${below.xLarge`
    height: 75vh;
    width: 100vw;
  `};
`;

const About = styled(Section)`
  display: grid;
  grid-template-rows: repeat(3,1fr);
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  
`;

const Phoenix = styled.img`
  width: 280px;
  grid-row: 2/span 1;
  z-index: 10;
  transform: rotate(5deg) scaleX(-1);
  margin: 0 auto;
  ${below.small`
    width: 225px;
  `}
`;

const Text = styled.p`
  font: ${boldType};
  color: ${black};
  margin: 0;
  padding: 10px;
  grid-row: 3/span 1;
  background: ${({ type }) => ((type === 'quote') || (type === 'more') ? 'rgba(255,255,255,.2)' : 'none')};
  border-radius: 8px;
  ${below.large`
    background: ${({ type }) => (type === 'quote' ? 'rgba(255,255,255,.2)' : 'none')};
    
  `}

  ${props => props.github && css`
    text-decoration: underline;
    margin-top: 5px;
  `}
  ${props => props.projects && css`
    text-decoration: underline;
    margin-top: 6%;
  `}
  ${props => props.descript && css`
    font: ${descript};
  `}
`;

const Fire = styled.img`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3.6%;
  position: absolute;
  left: 0;
  bottom: 0%;
  z-index: 1;
  ${below.xXLarge`
    bottom: 3.7%;
  `}
  ${below.xLarge`
    bottom: 4.3%;
  `}
  ${below.large`
    bottom: 5.2%;
  `}
  ${below.medium`
    bottom: 6%;
  `}
  ${below.small`
    bottom: 13.5%;
  `}
  ${below.xSmall`
    bottom: 14.8%;
  `}
`;

const Projects = styled(Section)`
  ${Flex({fd:'column',jc:'flex-start'})};
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  position: relative;
  ${below.small`
    ${Flex({fd:'column',jc:'center'})};
  `}
  `;

const Tux = styled.div`
  width: 75%;
  border: 1px solid ${yellow3};
  height: 50%;
  background-color: rgba(255,255,255,.25);
  border-radius: 15px;
  z-index: 15;
  ${below.large`
    height: 60%;
  `};
  ${below.small`
    width: 95%;
    height: 60%;
    padding: 2%;
  `};
`;

const TuxImg = styled.img`
  width: 100%;
  margin: 0 auto;
  padding: 5%;
`;


const ContactDiv = styled.div`
  ${Flex};
  max-width: 30vw;
  ${below.large`
  `}
`;

const Contact = styled(Section)`
  display: ${Flex({fd:'column'})};
  background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%);
  padding: 25px;
`;
