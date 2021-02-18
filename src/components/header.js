import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Flex, navItem } from './utilities';

const Header = () => (
  <Head>
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem type="about" to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  </Head>

)

export default Header;

const Head = styled.header`
    background: #000;
    /* height: 170px; */
`;

const Nav = styled.nav`
    ${Flex};
    max-width: 1440px;
    padding: 10px 0 0;
    margin: 0 auto;
    height: 80px;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    font: ${navItem};
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    margin-left: ${({type}) => (type === 'about' ? 'auto' : '0')};
`;
