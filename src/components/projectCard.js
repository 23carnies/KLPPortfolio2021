import React, { useState,  } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { Flex, yellow, orange, blue, pine, black, grey, teal, white, violet, mauve, cardBorder, box_shadow3 } from '../components/utilities';

const ProjectCard = ({ title, description, image, openLink, gitLink }) => {
    const [cardFlip, setCardFlip] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: (cardFlip === false) ? 1 : 0,
        transform: `perspective(600px) rotateX(${(cardFlip === false) ? 180 : 0}deg)`,
        config: { mass: 4, tension: 300, friction: 39 }
    })

    return ( 
        <div onClick={() => setCardFlip(state => !state)}>
            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position:'absolute' }}>
                <CardFront>
                    <Image src={image}></Image>
                    <HTwo>{title}</HTwo>
                    <BTN>More Info</BTN>
                </CardFront>
            </animated.div>
           
           <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <CardBack>
                    <Pgraph>{description}</Pgraph>
                    <div>
                        <BTN type="open" src={openLink}>Open</BTN>
                        <BTN src={gitLink}>Github</BTN>
                    </div>
                        <BTN>Return</BTN>
                </CardBack>
           </animated.div>
       </div>
     );
}
 
export default ProjectCard;

const CardFront = styled.div`
    ${Flex({fd:'column'})};
    margin: 20px;
    padding: 20px;
    width: 370px;
    height: 500px;
    border: ${cardBorder};
    border-radius: 70px 3px 70px 3px;
    /* background: ${violet}; */
    background: linear-gradient(to top, ${mauve} 2%,  #ff5126 100%);
    box-shadow: ${box_shadow3};
    `;

const CardBack = styled(CardFront)`
    border-radius: 3px 70px 3px 70px;
    background: linear-gradient(to top, ${blue} 2%,  #12ead4 100%);
    /* background: ${mauve}; */
`;

const Image = styled.img`
    max-width: 225px;
    border: ${cardBorder};
    border-radius: 5px;
`;


const Pgraph = styled.p`
    font: 400 18px 'Quicksand', sans-serif;
    text-align: center;
    line-height: 24px;
    margin: 5px;
    color: ${white};
`;

const HTwo = styled.h2`
    font: 700 36px 'Roboto Mono', monospace;
    text-align: center;
    line-height: 54px;
    margin: 5px;
    color: ${white};
`;

const BTN = styled.button`
    width: 100px;
    height: 50px;
    margin: 10px;

    border: ${cardBorder};
    border-radius: 5px;
    font: 600 18px 'Quicksand', sans-serif;

    color: ${({type}) => (type === 'open' ? `${white}` : `${violet}`)};
    background: ${({type}) => (type === 'open' ? `${violet}` : `${white}`)};

    :hover {
        color: ${({type}) => (type !== 'open' ? `${white}` : `${violet}`)};
        background: ${({type}) => (type !== 'open' ? `${violet}` : `${white}`)};
    }
`;