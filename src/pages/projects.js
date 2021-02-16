import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

import styled from 'styled-components';
import { Flex, pine, violet, title } from '../components/utilities';

class Projects extends Component {
    state = { 
        projects: [
            {
                title: 'Despejado',
                description: 'A bilingual weather app built in React, utilizing two APIs and designed in Sass. A passion project built in December 2020.',
                image: 'https://i.imgur.com/G8S7QY5.jpg',
                openLink: 'http://despejado.surge.sh/',
                gitLink: 'https://github.com/23carnies/despejado',
            },
            {
                title: 'Meet Your Maker',
                description: 'A full CRUD MERN stack app connecting urban farmers and makers (like myself) with local buyers. A team project at General Assembly utilizing AWS-SDK and Semantic UI for React.',
                image: 'https://i.imgur.com/t7IPbkV.png',
                openLink: 'https://meetyourmaker925.herokuapp.com/',
                gitLink: 'https://github.com/23carnies/MeetYourMakerCoupled',
            },
            {
                title: 'This Portfolio',
                description: 'This portfolio ...',
                image: 'https://i.imgur.com/Jy3m7Ke.jpg',
                openLink: '',
                gitLink: 'https://github.com/23carnies/portfolio2021',
            },
            {
                title: 'bilingüe',
                description: 'A full CRUD app built in Django and Python for maintaining Spanish language skills. Designed with pure CSS. Built as a unit project at General Assembly.',
                image: 'https://i.imgur.com/TKIM2hY.png',
                openLink: '',
                gitLink: 'https://github.com/23carnies/bilingue',
            },
            {
                title: 'Psychedelic Roulette',
                description: 'A vibrant, digital update to the centuries old table game. Built using HTML, pure CSS, and vanilla Javascript. built as a unit project at General Assembly.',
                image: 'https://i.imgur.com/cWprKHg.png',
                openLink: 'http://psychedelic-roulette.surge.sh/',
                gitLink: 'https://github.com/23carnies/psychedelicRoulette',
            },
            {
                title: 'wodWizard',
                description: 'A full CRUD Express, MongoDB, and Node.js app for daily workouts utilizing Bootstrap for styling and quotes from the Forismatic API. Built as a unit project at General Assembly.',
                image: 'https://i.imgur.com/e7HxXxR.png',
                openLink: 'https://wodwizard.herokuapp.com/',
                gitLink: 'https://github.com/23carnies/wodWizard',
            },
        ]
     }
    render() { 
        return ( 
            <Layout>
                <Header />
                <ProjectBack>
                    <Headline>My work</Headline>
                    <CardGroup>
                    {this.state.projects.map((project, idx) =>
                        <ProjectCard 
                            key={idx}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            openLink={project.openLink}
                            gitLink={project.gitLink}
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
    background: ${pine};
`;

const Headline = styled.h4`
    font: ${title};
    color: ${violet};
    border-bottom: 5px dotted ${violet};
`;

const CardGroup = styled.section`
    ${Flex({fw:'wrap'})};
    max-width: 1400px;
    height: 100vh;
`;