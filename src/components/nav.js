import React, { useState } from 'react';
import styled from 'styled-components';
import kpLogo from '../images/logo.svg';
import { Link } from 'gatsby';
import {
  Flex,
  navItem,
  below,
  white,
  nameplate,
  black,
} from './utilities';
import { useSpring, animated } from 'react-spring';



const HeaderNav = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const navAnimate = useSpring({
        transform: isNavOpen
          ? `translate3d(0,0,0) scale(1)`
          : `translate3d(100%,0,0) scale(0.6)`,
      });
      
    return ( 
        <Nav>
            <Logo src={kpLogo} alt="KP Phoenix Logo" />
            <Name to="/">Karen Lobin Perkins</Name>
            <Hamburger onClick={() => setNavOpen(!isNavOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <NavMenu isNavOpen={isNavOpen}>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </NavMenu>
        </Nav>
    );
}
 
export default HeaderNav;

const Nav = styled.div`
  padding: 30px 2rem;
  ${Flex({jc:'space-between',ai:'center',fw:'wrap'})};
  background: ${black};
  width: 100%;
  height: 130px;
  ${below.small`
    height: 70px;
  `}
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

const Logo = styled.img`
  width: 100px;
  padding: 0 2%;
  margin: 0 2%;
  ${below.medium`
    width: 70px;
  `}
  ${below.small`
    display: none;
  `}
`;

const Name = styled(Link)`
  padding: 0 1%;
  margin: 0 2%;
  font: ${nameplate};
  text-decoration: none;
  ${below.medium`
  font-size: 2rem;
  margin: 0 1%;
`}
  ${below.small`
    font-size: 1.6rem;
    margin: 0 1% 17% 1%;
  `}
`;

const NavMenu = styled.div`
  ${Flex({jc:'space-between',ai:'center'})};
  position: relative;
  background: ${black};
  ${below.large`
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isNavOpen }) => (isNavOpen ? "100vh" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    z-index: 100;
  `}
`;

const Hamburger = styled.div`
  ${Flex({fd:'column'})};
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${white};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  ${below.large`
    ${Flex({fd:'column'})};
  `}
  ${below.small`
    margin: 0 1% 17% 1%;
  `}
`;


const NavItem = styled(Link)`
  font: ${navItem};
  color: ${white};
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem 30px;
  cursor: pointer;

  :hover {
    border-bottom: 3px solid ${white};
    transition: 0.3s ease border;
  };

  ${below.small`
    font-size: 1.7rem;
  `}
`;