import React, { useState,  } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { css } from 'styled-components';

import { Flex, boxshadow4, black, grey, white, violet, mauve, cardBorder, box_shadow3, boldType } from '../components/utilities';

const ProjectCard = ({ title, description, image, openLink, gitLink, alt }) => {
    const [cardFlip, setCardFlip] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: (cardFlip === false) ? 1 : 0,
        transform: `perspective(600px) rotateX(${(cardFlip === false) ? 180 : 0}deg)`,
        config: { mass: 4, tension: 300, friction: 39 }
    })

    return ( 
        <div onClick={() => setCardFlip(!cardFlip)}>
            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position:'absolute' }}>
                <CardFront>
                    <Image src={image} alt={alt} />
                    <HTwo>{title}</HTwo>
                    {/* <BTN onClick={() => setCardFlip(!cardFlip)}>More Info</BTN> */}
                </CardFront>
            </animated.div>
           
           <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <CardBack>
                    <Pgraph>{description}</Pgraph>
                    <div style={{margin: 'auto 15px 35px'}}>
                        <BTN type="open" href={openLink} target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
                        <BTN href={gitLink} target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
                    </div>
                        {/* <BTN onClick={() => setCardFlip(!cardFlip)}>Return</BTN> */}
                </CardBack>
           </animated.div>
       </div>
     );
}
 
export default ProjectCard;

// export const SmallCard = () => {
//     const [cardFlip, setCardFlip] = useState(false);
//     const { transform, opacity } = useSpring({
//         opacity: (cardFlip === false) ? 1 : 0,
//         transform: `perspective(600px) rotateX(${(cardFlip === false) ? 180 : 0}deg)`,
//         config: { mass: 4, tension: 300, friction: 39 }
//     })
//     return (
//         <div onClick={() => setCardFlip(!cardFlip)}>
//         <CardFront>
//             <Image small src="https://tux-staging.herokuapp.com/images/vertical-logo.svg" alt="Logo for project pronounced Tux" />
//             <HTwo>t.ux</HTwo>
//         </CardFront>

//         <CardBack>
//             <Pgraph small>t.ux is the original, seminal product from theCOOP. I spearheaded the front end design implementation working closely with the design team to create pixel-perfect creations of their wireframes. I constructed a styled component library for the project and am in the process of implementing WAI-ARIA accessibility standards.</Pgraph>
//             <div style={{margin: '15px'}}>
//                 <BTN type="open" href="https://tux-staging.herokuapp.com/" target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
//                 <BTN href="https://github.com/23carnies/tux" target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
//             </div>

//         </CardBack>
//         </div>
//     )
// }

export const CardFront = styled.div`
    ${Flex({fd:'column'})};
    margin: 20px;
    padding: 20px;
    width: 370px;
    height: 500px;
    border: ${cardBorder};
    border-radius: 70px 3px 70px 3px;
    background: ${mauve};
    background: linear-gradient(to top, ${mauve} 2%,  #ff5126 100%);
    box-shadow: ${box_shadow3};

    ${props => props.small && css`
        background: none;
        box-shadow: none;
        position: absolute;
        left: 25%;
        top: 10%;
        border-radius: 12px;
        border: 2px solid blue;
    `}
`;

export const CardBack = styled(CardFront)`
    border-radius: 3px 70px 3px 70px;
`;

export const Image = styled.img`
    max-width: 225px;
    border: ${cardBorder};
    border-radius: 5px;

    ${props => props.small && css`
        margin: 20px;
        /* position: absolute;
        top: 0;
        left: 25%; */
    `}
`;


export const Pgraph = styled.p`
    font: 400 18px 'Quicksand', sans-serif;
    text-align: center;
    line-height: 24px;
    margin: 30px 5px 5px;
    /* color: ${white}; */

    ${props => props.small && css`
        color: ${black};
        font: ${boldType}
    `}
`;

export const HTwo = styled.h2`
    font: 700 30px 'Roboto Mono', monospace;
    text-align: center;
    line-height: 54px;
    margin: 5px;
    color: ${white};
`;

export const BTN = styled.a`
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 10px 20px;
    box-shadow: ${boxshadow4};
    border: ${cardBorder};
    border-radius: 5px;
    font: 600 18px 'Quicksand', sans-serif;
    cursor: pointer;

    color: ${({type}) => (type === 'open' ? `${white}` : `${violet}`)};
    background: ${({type}) => (type === 'open' ? `${violet}` : `${white}`)};

    /* ${props => props.disable && css`
        background: ${({props}) => (props === '')}
    `} */

    :hover {
        color: ${({type}) => (type !== 'open' ? `${white}` : `${violet}`)};
        background: ${({type}) => (type !== 'open' ? `${violet}` : `${white}`)};
    }
`;