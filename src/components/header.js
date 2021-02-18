import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Flex, navItem } from './utilities';
import kpLogo from '../images/logo.svg'


const Header = () => (
  <Head>
    <Nav>
      <Logo src={kpLogo} alt="KP Phoenix Logo"/>
      <NavItem home to="/">Home</NavItem>
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

const Logo = styled.img`
    border-radius: 50%;
    width: 70px;
    margin-top: -7px;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    font: ${navItem};
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    margin-left: ${({type}) => (type === 'about' ? 'auto' : '0')};
    
    ${props => props.home && css`
      padding-left: 0;
    `}
`;
