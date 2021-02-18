import React from 'react';
import styled from 'styled-components';
import { Flex, nameplate, white, navItem  } from '../components/utilities';
// import { Link } from "gatsby"
import kpLogo from '../images/logo.svg'

const Nameplate = () => {
    
    return ( 
        <Header>
            <Logo src={kpLogo} alt="KP Phoenix Logo"/>
            <Effect>
                <Name>Karen Lobin Perkins</Name>
                <GradientName></GradientName>
                <DodgeName></DodgeName>
                </Effect>
               <Title>Front End Engineer</Title>
        </Header>
     );
}
 
export default Nameplate;

const Header = styled.header`
    width: 100vw;
    ${Flex};
    background: #000;
`;

const Logo = styled.img`
    border-radius: 50%;
    width: 120px;
    margin-right: 15px;
`;

const Effect = styled.div`
    background: #000;
    overflow: hidden;
    height: 120px;
    width: 58vw;
    padding: 30px 0;

    filter: brightness(200%)
`;

const Name = styled.h1`
    font: ${nameplate};
    width: 100vw;
    color: ${white};
    text-transform: uppercase;
    position: absolute;

    /* left: 20%; */

    &:before {
        content: 'Karen Lobin Perkins';
        mix-blend-mode: difference;
        position: absolute;
        filter: blur(2px)
    }
`;

const Title = styled.h2`
    font: ${navItem};
    margin-left: 30px;
    color: rgba(250, 237,7,1);
`;

const GradientName = styled.div`
    background: linear-gradient(120deg, rgba(192,0,1,1) 4%, rgba(250, 237,7,1) 86%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    mix-blend-mode: multiply;
`;

const DodgeName = styled.div`
    background: radial-gradient(circle, #ffffd9, black 55%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;

    mix-blend-mode: color-dodge;
    animation: dodge-area 14s linear infinite;

    @keyframes dodge-area {
        to {
            transform: translate(50%, 50%);
        }
    }
`;
