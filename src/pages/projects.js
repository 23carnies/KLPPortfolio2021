import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

import styled from 'styled-components';
import { Flex, yellow3, title, below } from '../components/utilities';

class Projects extends Component {
    state = { 
        projects: [
            {
                title: 't.ux',
                description: 't.ux is the original, seminal product from theCOOP. I spearheaded the front end design implementation working closely with the design team to create pixel-perfect creations of their wireframes. I constructed a styled component library for the project and am in the process of implementing WAI-ARIA accessibility standards.',
                image: 'https://i.imgur.com/P0dkuGz.png',
                openLink: 'https://tux-staging.herokuapp.com/login',
                gitLink: 'https://github.com/23carnies/tux',
                alt: 'Logo for project pronounced Tux',
                info: ''
            },
            {
                title: 'Despejado',
                description: 'A bilingual weather app built in React, utilizing two APIs and designed in Sass. A passion project built in December 2020.',
                image: 'https://i.imgur.com/G8S7QY5.jpg',
                openLink: 'http://despejado.surge.sh/',
                gitLink: 'https://github.com/23carnies/despejado',
                alt: 'Screenshot of Despejado app',
                info: ''
            },
            {
                title: 'Meet Your Maker',
                description: 'A full CRUD MERN stack app connecting urban farmers and makers (like myself) with local buyers. A team project at General Assembly utilizing AWS-SDK and Semantic UI for React.',
                image: 'https://i.imgur.com/t7IPbkV.png',
                openLink: 'https://meetyourmaker925.herokuapp.com/',
                gitLink: 'https://github.com/23carnies/MeetYourMakerCoupled',
                alt: 'Logo for Meet Your Maker',
                info: ''
            },
            {
                title: 'This Portfolio',
                description: 'This portfolio is built in Gatsby and utilizes React Spring for animations. Designed by myself using Styled Components.',
                image: 'https://i.imgur.com/Jy3m7Ke.jpg',
                openLink: '',
                gitLink: 'https://github.com/23carnies/portfolio2021',
                alt: 'Cartoon drawing of Karen',
                info: ''
            },
            {
                title: 'bilingüe',
                description: 'A full CRUD app built in Django and Python for maintaining Spanish language skills. Designed with pure CSS. Built as a unit project at General Assembly.',
                image: 'https://i.imgur.com/TKIM2hY.png',
                openLink: '',
                gitLink: 'https://github.com/23carnies/bilingue',
                alt: 'Logo for bilingüe app',
                info: 'Guest user: diana password: 1234aaaa*'
            },
            {
                title: 'wodWizard',
                description: 'A full CRUD Express, MongoDB, and Node.js app for daily workouts utilizing Bootstrap for styling and quotes from the Forismatic API. Built as a unit project at General Assembly.',
                image: 'https://i.imgur.com/e7HxXxR.png',
                openLink: 'https://wodwizard.herokuapp.com/',
                gitLink: 'https://github.com/23carnies/wodWizard',
                alt: 'Screenshot of wodWizard app',
                info: ''
            },
        ]
     }
    render() { 
        return ( 
            <Layout>
                {/* <Header /> */}
                <ProjectBack>
                    <Headline>My work</Headline>
                    <SubLine>Click card for more info</SubLine>
                    <CardGroup>
                    {this.state.projects.map((project, idx) =>
                        <ProjectCard 
                            key={idx}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            openLink={project.openLink}
                            gitLink={project.gitLink}
                            alt={project.alt}
                            info={project.info}
                        />
                    )}
                    </CardGroup>
                </ProjectBack>
            </Layout>
         );
    }
}
 
export default Projects;

const ProjectBack = styled.article`
    ${Flex({fd:'column'})}
    padding: 0 0 8%;
`;

const Headline = styled.h3`
    text-align: center;
    font-family: ${title};
    color: ${yellow3};
    margin: 1.5% 1% 1%;
    ${below.large`
        font-size: 2.4rem;
    `}
    ${below.medium`
        font-size: 2rem;
    `}
`;

const SubLine = styled.p`
    margin: 0;
    color: ${yellow3};
    font-family: ${title};
    
`;

const CardGroup = styled.section`
    ${Flex({fw:'wrap'})};
    max-width: 1400px;
    height: 100vh;
    ${below.xLarge`
        max-width: 1280px;
    `}
`;