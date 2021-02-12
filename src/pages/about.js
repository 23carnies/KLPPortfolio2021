import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Header from '../components/header';
// import headshot from '../images/headshot.png';
import detroit from '../images/klp-detroit.png';
import { Flex, violet, teal, imgBorder, title, text } from '../components/utilities'
// import styled from 'styled-components'

const About = () => {
    return ( 
        <Layout>
            <Header />
            <Title>Hi! I'm Karen</Title>
            <AboutBack>
                <Img src={detroit} />
                {/* <Headshot src={headshot} alt="Karen in business attire"/> */}
                <div>
                    <Text>From my earliest memories, I’ve always loved to learn. I taught myself to play guitar and built a car from scratch with my father as a teenager. I’ve studied multiple languages and I picked up HTML and CSS in college. For years I built sites for family and friends until deciding to pivot my career to software development. </Text>
                    <Text>A recent graduate of the Software Engineering Immersive at General Assembly, I am experienced in modern web design. Skilled in pure CSS and several frameworks, I build alluring sites and apps with great functionality.</Text>
                    <Text>I have a passion for rowing, a sport of focus and dedication. I bring these skills with me to every project. Passionate about languages, travel, and fitness, I look to make a positive difference in the world with software development.</Text>

                </div>
            </AboutBack>
        </Layout>
    );
}
 
export default About;

// About Page
const AboutBack = styled.div`
    width: 100vw;
    ${Flex({ai:'flex-start'})};
    background: ${violet};
    
`;

const Title = styled.h1`
    text-align: center;
    background: ${violet};
    font: ${title};
    overflow: hidden;
    border-right: ${teal};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .1em;
    animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${teal} }
    }
`;

const Img = styled.img`
    margin: 20px;
`;

const Text = styled.p`
    font: ${text};
    max-width: 95%;
    margin-left: 2%;
`;

const Headshot = styled.img`
    border-radius: 50%;
    border: ${imgBorder};
    width: 300px;
    height: 300px;
`;