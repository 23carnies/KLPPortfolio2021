import React from 'react';
import Layout from '../components/layout';
import headshot from '../images/headshot.png';
import * as S from '../components/styledComponents'
// import styled from 'styled-components'

const About = () => {
    return ( 
        <Layout>
            <S.AboutBack>
                <S.Title>Hi! I'm Karen</S.Title>
                <S.Headshot src={headshot} alt="Karen in business attire"/>
                <S.Text>From my earliest memories, I’ve always loved to learn. I taught myself to play guitar and built a car from scratch with my father as a teenager. I’ve studied multiple languages and I picked up HTML and CSS in college. For years I built sites for family and friends until deciding to pivot my career to software development. </S.Text>
                <S.Text>A recent graduate of the Software Engineering Immersive at General Assembly, I am experienced in modern web design. Skilled in pure CSS and several frameworks, I build alluring sites and apps with great functionality.</S.Text>
                <S.Text>I have a passion for rowing, a sport of focus and dedication. I bring these skills with me to every project. Passionate about languages, travel, and fitness, I look to make a positive difference in the world with software development.</S.Text>
            </S.AboutBack>
        </Layout>
    );
}
 
export default About;