import styled, { css } from 'styled-components';

export const Header = styled.header`
    background: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    
`;







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

export const Link = styled.button`
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

