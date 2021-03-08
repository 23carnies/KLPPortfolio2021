import React from 'react';
import styled from 'styled-components';
import { Flex, nameplate, white, yellow2, yellow1, red2, navItem, below  } from '../components/utilities';
// import { Link } from "gatsby"
import kpLogo from '../images/logo.svg'

const Nameplate = () => {
    
    return ( 
        <Header>
            <Container>
                <Effect>
                <Logo src={kpLogo} alt="KP Phoenix Logo"/>
                    <Name>Karen Lobin Perkins</Name>
                    <GradientName></GradientName>
                    <DodgeName></DodgeName>
                </Effect>
                <Title>Front End Engineer</Title>
            </Container>
        </Header>
     );
}
 
export default Nameplate;

const Header = styled.header`
    width: 100vw;
    ${Flex};
    background: #000;
    /* ${below.large`
        ${Flex({fd:'column'})};
    `} */
`;
const Container = styled.div`
    max-width: 1440px;
    ${below.xLarge`
        max-width: 1280px;
    `};
    ${below.large`
        max-width: 1024px;
    `};
    ${below.medium`
        max-width: 768px;
    `};
    ${below.small`
        max-width: 90%;
    `};
`;

const Logo = styled.img`
    border-radius: 50%;
    width: 120px;
    margin-right: 15px;
    position:absolute;
    left: 0;
`;

const Effect = styled.div`
    ${Flex({fd:'column',})};
    background: #000;
    height: 120px;
    width: 58vw;
    padding: 30px 0;
    overflow: hidden;
    
    filter: brightness(200%);
    -webkit-filter: brightness(200%);

    ${below.large`
        width: 65vw;
    `};
`;

const Name = styled.h1`
    z-index:1;
    font: ${nameplate};
    /* width: 100vw; */
    color: ${white};
    text-transform: uppercase;
    position: absolute;
    left: 15%;
    top: 13%;
    ${below.xXLarge`
        font-size: 3.3rem;
        top: 23%;
        `}
    ${below.xLarge`
        font-size: 3.1rem;
        top: 23%;
    `}
    ${below.large`
        font-size: 2.2rem;
        margin-left: 25px;
    `}
    ${below.medium`
        font-size: 2rem;
    `}

    /* left: 20%; */

    &:before {
        content: 'Karen Lobin Perkins';
        mix-blend-mode: difference;
        -webkit-mix-blend-mode: difference;
        position: absolute;
        filter: blur(2px);
        -webkit-filter: blur(2px);
    }
`;

const Title = styled.h2`
    font: ${navItem};
    margin: -10px auto 10px;
    color: ${yellow1};
`;

const GradientName = styled.div`
    background: linear-gradient(120deg, ${red2} 4%, ${yellow2} 86%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    mix-blend-mode: multiply;
    -webkit-mix-blend-mode: multiply;
`;

const DodgeName = styled.div`
    background: radial-gradient(circle, ${white}, black 55%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    z-index: 2;

    mix-blend-mode: color-dodge;
    -webkit-mix-blend-mode: color-dodge;
    animation: dodge-area 14s linear infinite;

    @keyframes dodge-area {
        to {
            transform: translate(50%, 50%);
            -webkit-transform: translate(50%, 50%);
        }
    }
`;
