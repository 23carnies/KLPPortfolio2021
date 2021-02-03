import styled, { css } from 'styled-components';
import { Link } from 'gatsby'
import imgPath from '../../images/chinese-times-square.jpg'

// Header 
export const Header = styled.header`
    background: #6b098c;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
`;

export const List = styled.li`
    list-style-type: none;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 20px;
`;

export const Name = styled(NavItem)`
    margin-left: 30px;
`;

export const About = styled(NavItem)`
    margin-left: auto;
`;


// Layout
export const Layout = styled.article`
    margin: 0 auto;
`;

// About Page
export const AboutBack = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: purple;
    
`;

export const Headshot = styled.img`
    border-radius: 50%;
    border: 3px inset #ccc;
    width: 300px;
    height: 300px;
`;







// Projects Page
export const Card = styled.section`
    max-width: 400px;
    border: 1px inset #8bd1d3;
    background-color: #cdf5db;
`;

export const Image = styled.img`
    max-width: 225px;
    border: 1px inset #8bd1d3;
`;

export const Pgraph = styled.p`
    font: 400 18px 'Roboto Mono', monospace;
    line-height: 24px;
    color: #96439d;
`;

export const htwo = styled.h2`
    font: 700 36px 'Roboto Mono', monospace;
    line-height: 54px;
    color: white;
`;

export const BTN = styled.button`
    width: 75px;
    height: 50px;
    
    ${props => props.open && css`
        color: white;
        background-color: #390164;
        border: 1px inset #8bd1d3;
    
    `}

    ${props => props.git && css`
        color: #390164;
        background-color: white;
        border: 1px inset #8bd1d3;
    
    `}
`;

