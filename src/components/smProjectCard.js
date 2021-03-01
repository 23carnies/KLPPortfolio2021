import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { CardFront, CardBack, Image, Pgraph, HTwo, BTN } from './projectCard';
// import { black, violet, Flex } from './utilities';
// import styled from 'styled-components';

const SmallCard = () => {
    const [smCardFlip, setSmCardFlip] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: (smCardFlip === false) ? 1 : 0,
        transform: `perspective(600px) rotateX(${(smCardFlip === false) ? 180 : 0}deg)`,
        config: { mass: 4, tension: 300, friction: 39 }
    })
    return (
        <div onClick={() => setSmCardFlip(!smCardFlip)}>
            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position:'absolute' }}>
                <CardFront small>
                    <Image small src="https://tux-staging.herokuapp.com/images/vertical-logo.svg" alt="Logo for project pronounced Tux" />
                    <HTwo>t.ux</HTwo>
                </CardFront>
            </animated.div>

            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position:'absolute' }}>
                <CardBack small>
                    <Pgraph small>t.ux is the original, seminal product from theCOOP. I spearheaded the front end design implementation working closely with the design team to create pixel-perfect creations of their wireframes. I constructed a styled component library for the project and am in the process of implementing WAI-ARIA accessibility standards.</Pgraph>
                    <div style={{margin: '15px'}}>
                        <BTN type="open" href="https://tux-staging.herokuapp.com/" target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
                        <BTN href="https://github.com/23carnies/tux" target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
                    </div>
                </CardBack>
            </animated.div>

        </div>
    )

        //TODO: where should the card live to use the same state as in the project page??
        // <div style={{border:`1px solid ${black}`, background:`${black}`}}>
        //     <Image src={image} alt={alt} />
        //     <HTwo>{title}</HTwo>
        //     <Pgraph>{description}</Pgraph>
        //     <div style={{margin: '15px'}}>
        //         <BTN type="open" href={openLink} target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
        //         <BTN href={gitLink} target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
        //     </div>
        // </div>
        // <CardFront>
        //     <Image small src="https://tux-staging.herokuapp.com/images/vertical-logo.svg" alt="Logo for project pronounced Tux" />
        //     <HTwo>t.ux</HTwo>
        //     <Pgraph small>t.ux is the original, seminal product from theCOOP. I spearheaded the front end design implementation working closely with the design team to create pixel-perfect creations of their wireframes. I constructed a styled component library for the project and am in the process of implementing WAI-ARIA accessibility standards.</Pgraph>
        //     <div style={{margin: '15px'}}>
        //         <BTN type="open" href="https://tux-staging.herokuapp.com/" target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
        //         <BTN href="https://github.com/23carnies/tux" target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
        //     </div>
        // </CardFront>

        // <CardBack>

        // </CardBack>
    // )
}

export default SmallCard;

// const Card = styled.div`
//     ${Flex({fd:'column'})};
//     position: relative;
//     width: 370px;
//     height: 370px;
//     padding: 5% 2%;
//     /* text-decoration: none; */
//     border: 1px solid ${black};
//     border-radius: 8px;
//     overflow: hidden;
//     /* background: linear-gradient(to top, #ff99cc 8%,  ${violet} 100%); */
// `;