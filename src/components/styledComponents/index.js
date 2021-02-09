import styled, { css } from 'styled-components';
import { Link } from 'gatsby'
import { FlexCenter } from '../utilities';
import * as c from '../utilities/Colors';
import * as b from '../utilities/Borders';

// import imgPath from '../../images/chinese-times-square.jpg'

// Header 
export const Header = styled.header`
    background: #000;
    height: 200px;
`;

export const Nav = styled.nav`
    ${FlexCenter};
    height: 80px;
`;

export const Effect = styled.div`
    background: #000;
    overflow: hidden;
    height: 100px;
    padding: 30px;

    filter: brightness(200%)

    ${props => props.margin && css`
        margin-left: auto;
    `}
`;

export const NavItem = styled(Link)`
    /* margin: 0 auto; */
    text-decoration: none;
    font-family: 'Warnes';
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    margin-left: ${({type}) => (type === 'about' ? 'auto' : '0')};
`;

export const Name = styled(Link)`
    text-align: center;
    font-family: 'Warnes';
    font-size: 70px;
    width: 50vw;
    text-transform: uppercase;
    text-decoration: none;
    position: absolute;
    left: 25%;

    &:before {
        content: 'Karen Lobin Perkins';
        mix-blend-mode: difference;
        position: absolute;
        filter: blur(3px)
    }
`;

/* export const About = styled(NavItem)`
    &:before {
        content: 'About';
        position: absolute;
        mix-blend-mode: difference;

        filter: blur(3px)
    }
`;
export const Projects = styled(NavItem)`
    &:before {
        content: 'Projects';
        position: absolute;
        mix-blend-mode: difference;

        filter: blur(3px)
    }
`;
export const Contact = styled(NavItem)`
    &:before {
        content: 'Contact';
        position: absolute;
        mix-blend-mode: difference;

        filter: blur(3px)
    }
`;
export const Blogs = styled(NavItem)`
    &:before {
        content: 'Blogs';
        position: absolute;
        mix-blend-mode: difference;

        filter: blur(3px)
    }
`; */

export const Gradient = styled.div`
    background: linear-gradient(120deg, rgba(6,227,250,1) 5%, rgba(229, 151,64,1) 96%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    mix-blend-mode: multiply;
`;

export const Dodge = styled.div`
    background: radial-gradient(circle, white, black 55%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;

    mix-blend-mode: color-dodge;
    animation: dodge-area 10s linear infinite;

    @keyframes dodge-area {
        to {
            transform: translate(50%, 50%);
        }
    }
`;




// Layout
export const Layout = styled.article`
    margin: 0 auto;
`;

// About Page
export const AboutBack = styled.div`
    width: 100vw;
    ${FlexCenter({dir:'column'})};
    background: ${c.violet};
    
`;

export const Headshot = styled.img`
    border-radius: 50%;
    border: ${b.imgBorder};
    width: 300px;
    height: 300px;
`;







// Projects Page

// row-wrap is not working here
export const CardGroup = styled.section`
    ${FlexCenter({wrap:'wrap'})};
    background: ${c.pine};
`;


export const Card = styled.div`
    ${FlexCenter({dir:'column'})};
    margin: 20px;
    padding: 20px;
    max-width: 400px;
    border: ${b.cardBorder};
    border-radius: 70px 3px 70px 3px;
    background: ${c.teal};
`;

export const Image = styled.img`
    max-width: 225px;
    border: ${b.cardBorder};
    border-radius: 5px;
`;

export const Pgraph = styled.p`
    font: 400 18px 'Quicksand', sans-serif;
    text-align: center;
    line-height: 24px;
    margin: 5px;
    color: ${c.white};
`;

export const HTwo = styled.h2`
    font: 700 36px 'Roboto Mono', monospace;
    text-align: center;
    line-height: 54px;
    margin: 5px;
    color: ${c.white};
`;

export const BTN = styled.button`
    width: 100px;
    height: 50px;
    margin: 10px;

    border: ${b.cardBorder};
    border-radius: 5px;
    font: 600 18px 'Quicksand', sans-serif;

    color: ${({type}) => (type === 'open' ? `${c.white}` : `${c.violet}`)};
    background: ${({type}) => (type === 'open' ? `${c.violet}` : `${c.white}`)};

`;

// Footer
export const Footer = styled.footer`
    background: #000;
    ${FlexCenter};
    max-height: 150px;
`;

export const FootDiv = styled.div`
    background: ${({bkColor}) => ((bkColor === 'git') ? '#6e5494' : (bkColor === 'link') ? '#0072b1' : '#ed2224')};
    border-radius: 50%;
    width: 100px;
    height: 100px;
    ${FlexCenter};
    margin: 30px;
    `;

export const FootP = styled.p`
    color: #fff;
    margin: 100px 30px 0 auto;
    /* padding-top: 70%; */
`;