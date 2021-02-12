import styled, { css } from 'styled-components';
import { Link } from 'gatsby'
import { FlexCenter, box_shadow3 } from '../utilities';
import * as c from '../utilities/Colors';
import * as b from '../utilities/Borders';
import * as t from '../utilities/Type';


// Header 
export const Header = styled.header`
    background: #000;
    /* height: 200px; */
`;

export const Nav = styled.nav`
    ${FlexCenter};
    height: 80px;
`;



export const NavItem = styled(Link)`
    /* margin: 0 auto; */
    text-decoration: none;
    font: ${t.navItem};
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    margin-left: ${({type}) => (type === 'about' ? 'auto' : '0')};
`;





// Layout
export const Layout = styled.article`
    margin: 0 auto;
    /* height: 100vh; */
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

export const Text = styled.p`
    font: ${t.text};
    max-width: 85%;
`;

export const Title = styled.h1`
    font: ${t.title};
    overflow: hidden;
    border-right: ${c.teal};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .1em;
    animation: 
        typing 3.5s steps()(40, end),
        blink-caret .75s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${c.teal} }
    }
`;







// Projects Page

// row-wrap is not working here
export const CardGroup = styled.section`
    ${FlexCenter({wrap:'wrap'})};
    background: ${c.pine};
    width: 100%;
    height: 100vh;
`;


export const Card = styled.div`
    ${FlexCenter({dir:'column'})};
    margin: 20px;
    padding: 20px;
    max-width: 370px;
    height: 500px;
    border: ${b.cardBorder};
    border-radius: 70px 3px 70px 3px;
    background: ${c.teal};
    box-shadow: ${box_shadow3};
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