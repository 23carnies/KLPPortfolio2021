import React from 'react';
import styled from 'styled-components';
import { black } from './utilities';
import { NavItem } from './header';

export const moblieMenu = () => {
    return (
        <NavWrapper>
            <nav>
                <NavItem home to="/">Home</NavItem>
                <NavItem type="about" to="/about">About</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>  
            </nav>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px;
  background: ${black};
  z-index: 10;
`;