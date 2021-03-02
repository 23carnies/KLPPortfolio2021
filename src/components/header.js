import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { Link } from 'gatsby';
import { Flex, navItem, below, Hamburger, black, white, yellow3 } from './utilities';
import kpLogo from '../images/logo.svg'


const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navAnimate = useSpring({
  tranasform: mobileNav ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`
});

  return (
  <Head>
    <Nav>
      <Logo src={kpLogo} alt="KP Phoenix Logo"/>
      <Mobile onClick={() => setMobileNav(true) && <mobileMenu style={navAnimate}/>}>
        Menu
      </Mobile>
      <NavItem large home to="/">Home</NavItem>
      <NavItem large type="about" to="/about">About</NavItem>
      <NavItem large to="/projects">Projects</NavItem>
      <NavItem large to="/contact">Contact</NavItem>
    </Nav>
  </Head>
  )

}

export default Header;

const moblieMenu = ({style}) => {
  return (
      <NavWrapper style={style}>
          <nav>
              <NavItem home to="/">Home</NavItem>
              <NavItem type="about" to="/about">About</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/contact">Contact</NavItem>  
          </nav>
      </NavWrapper>
  )
}


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

    ${below.xLarge`
      max-width: 1280px;
    `}
    ${below.large`
      max-width: 1000px;
    `}
    ${below.medium`
      max-width: 768px;
    `}
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

    ${props => props.large && css`
      ${below.large`
        display: none;
      `}

    `}
`;


// Mobile styled components

const Mobile = styled.button`
    color: ${white};
    background: transparent;
    border: none;
    font: ${navItem};
    text-transform: uppercase;
    display: none;

    ${below.large`
      display: block;
      z-index: 15;
      margin-left: auto;

      :hover {
        border-bottom: 3px dotted ${yellow3};
      }
    `}
`;

const NavWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px;
  background: ${black};
  z-index: 10;
  display: none;

    ${below.large`
      display: block;
      z-index: 15;

      :hover {
        border-bottom: 3px dotted ${yellow3};
      }
    `}
`;

const MobileNav = styled.nav`
  ${Flex({fd:'column',ai:'center',jc:'center'})};

`;
