import React from "react"
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from "gatsby"
import NamePlate from '../components/nameplate';
import { FlexCenter, teal, violet, white } from '../components/utilities';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NamePlate 
      siteTitle={data.site.siteMetadata.title}
    />
    <Main>
      <About><Link to="/about">Check Me Out!</Link></About>
      <Projects><Link to="/projects">Stuff I've Built</Link></Projects>
      <Contact><Link to="/contact">I'm Available for Hire!</Link></Contact>
    </Main>
  </Layout>
)

export default IndexPage;

const Main = styled.article`
  ${FlexCenter};
`;

const Section = styled.section`
  height: 100vh;
  width: 33.33vw;
  ${FlexCenter};
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
