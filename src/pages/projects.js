import React, { Component } from 'react';
import ProjectCard from '../components/projectCard';
import Layout from '../components/layout';
import { CardGroup } from '../components/styledComponents'

class Projects extends Component {
    state = { 
        projects: [
            {
                title: 'Meet Your Maker',
                description: 'A full CRUD MERN stack app connecting urban farmers and makers (like myself) with local buyers. A team project at General Assembly utilizing AWS-SDK and Semantic UI for React.',
                image: 'https://i.imgur.com/t7IPbkV.png',
                openLink: 'https://meetyourmaker925.herokuapp.com/',
                gitLink: 'https://github.com/23carnies/MeetYourMakerCoupled',
            },
            {
                title: 'Despejado | Clear',
                description: 'A bilingual weather app built in React, utilizing two APIs and designed in SCSS. A passion project built in December 2020.',
                image: 'https://i.imgur.com/G8S7QY5.jpg',
                openLink: 'http://despejado.surge.sh/',
                gitLink: 'https://github.com/23carnies/despejado',
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
            </Layout>
         );
    }
}
 
export default Projects;
