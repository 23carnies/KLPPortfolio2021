import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Header from '../components/header';
import { Flex, orange1,orange3, yellow3, imgBorder, title, text } from '../components/utilities'

const About = () => {
    return ( 
        <Layout>
            <Header />
            <AboutBack>
            <Headline>Hi! I'm Karen</Headline>
            <Box>
                <Img src="https://i.imgur.com/XxhHjhz.jpg" alt="Karen "/>
                <div style={{minWidth: '50%'}}>
                    <AboutText>From my earliest memories, I’ve always loved to learn. I taught myself to play guitar and built a car from scratch with my father as a teenager. I’ve studied multiple languages and I picked up HTML and CSS in college. For years I built sites for family and friends until deciding to pivot my career to software development. </AboutText>
                    <AboutText>A recent graduate of the Software Engineering Immersive at General Assembly, I am experienced in modern web design. Skilled in pure CSS and several frameworks, I build alluring sites and apps with great functionality.</AboutText>
                    <AboutText>I have a passion for rowing, a sport of focus and dedication. I bring these skills with me to every project. Passionate about languages, travel, and fitness, I look to make a positive difference in the world with software development. I want to see the world, and see what positive change I can be in it.</AboutText>

                    <Quote>“Here is the world. Beautiful and terrible things will happen. Don't be afraid.”<br/>
                    <i>-- Frederick Buechner</i></Quote>
                </div>
                </Box>
            </AboutBack>
        </Layout>
    );
}
 
export default About;


const AboutBack = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    ${Flex({fd:'column'})};
    /* background: ${orange1}; */
    /* background: ${orange3}; */
`;

const Box = styled.div`
    ${Flex({ai:'flex-start'})}
`;

const Headline = styled.h4`
    margin: 0;
    text-align: center;
    font: ${title};
    color: ${yellow3};
    border-bottom: 5px dotted ${yellow3};
`;

const Img = styled.img`
    margin: 40px 20px;
    width: 30%;
    border-radius: 12px;
    /* max-width: 45%; */
`;

const AboutText = styled.p`
    font: ${text};
    max-width: 95%;
    margin: 40px 20px;
`;

const Quote = styled(AboutText)`
    font-weight: 700;
`;

const Headshot = styled.img`
    border-radius: 50%;
    border: ${imgBorder};
    width: 300px;
    height: 300px;
`;