import React from 'react'
import styled from 'styled-components';

import { Flex, teal, white, violet, cardBorder, box_shadow3 } from '../components/utilities';

const ProjectCard = ({ title, description, image, openLink, gitLink }) => {
    return ( 
        // <Layout>
            <Card>
                <Image src={image}></Image>
                <HTwo>{title}</HTwo>
                {/* <Pgraph>{description}</Pgraph> */}
                <div>
                    <BTN type="open" src={openLink}>Open</BTN>
                    <BTN src={gitLink}>Github</BTN>
                </div>
            </Card>
        // </Layout>
     );
}
 
export default ProjectCard;

const Card = styled.div`
    ${Flex({fd:'column'})};
    margin: 20px;
    padding: 20px;
    width: 370px;
    height: 500px;
    border: ${cardBorder};
    border-radius: 70px 3px 70px 3px;
    background: ${teal};
    box-shadow: ${box_shadow3};
`;

const Image = styled.img`
    max-width: 225px;
    border: ${cardBorder};
    border-radius: 5px;
`;


// const Pgraph = styled.p`
//     font: 400 18px 'Quicksand', sans-serif;
//     text-align: center;
//     line-height: 24px;
//     margin: 5px;
//     color: ${white};
// `;

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

    &hover {
        color: ${({type}) => (type !== 'open' ? `${white}` : `${violet}`)};
        background: ${({type}) => (type !== 'open' ? `${violet}` : `${white}`)};
    }
`;