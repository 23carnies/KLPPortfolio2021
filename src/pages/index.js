import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import NamePlate from '../components/nameplate';
import { Flex, teal, violet, white } from '../components/utilities';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NamePlate />
    <Main>
      <About><Link to="/about">Check Me Out!</Link></About>
      <Projects><Link to="/projects">Stuff I've Built</Link></Projects>
      <Contact><Link to="/contact">I'm Available for Hire!</Link></Contact>
    </Main>
  </Layout>
)

export default IndexPage;

const Main = styled.article`
  ${Flex};
`;

const Section = styled.section`
  height: 100vh;
  width: 33.33vw;
  ${Flex};
`;

const About = styled(Section)`
  background: ${violet};
  
`;
const Projects = styled(Section)`
  background: ${teal};

`;
const Contact = styled(Section)`
  background: ${white};

`;
