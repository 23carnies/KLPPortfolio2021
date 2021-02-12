import React from 'react';
import styled from 'styled-components';
import * as t from '../components/utilities/Type';
import { Link } from "gatsby"

const nameplate = ({ siteTitle }) => {
    
    return ( 
        <header style={{width: '100vw'}}>
            <Effect>
                <Name to="https://www.linkedin.com/in/karen-lobin-perkins/" >{siteTitle}</Name>
                <Gradient></Gradient>
                <Dodge></Dodge>
            </Effect>
        </header>
     );
}
 
export default nameplate;

const Effect = styled.div`
    background: #000;
    overflow: hidden;
    height: 150px;
    /* width: 100vw; */
    padding: 30px;

    filter: brightness(200%)
`;

const Name = styled(Link)`
    /* text-align: center; */
    font: ${t.nameplate};
    width: 100vw;
    text-transform: uppercase;
    text-decoration: none;
    position: absolute;
    left: 20%;

    &:before {
        content: 'Karen Lobin Perkins';
        mix-blend-mode: difference;
        position: absolute;
        filter: blur(2px)
    }
`;

const Gradient = styled.div`
    background: linear-gradient(120deg, rgba(6,227,250,1) 5%, rgba(229, 151,64,1) 96%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    mix-blend-mode: multiply;
`;

const Dodge = styled.div`
    background: radial-gradient(circle, white, black 55%) center / 25% 25%;
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

