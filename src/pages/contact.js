import React from 'react';
import styled from 'styled-components';
// import Header from '../components/header';
import Layout from '../components/layout';
import ContactMe from '../components/emailjs';
import { Flex, title, yellow3, below } from '../components/utilities';


const Contact = () => {
    return ( 
        <Layout>
            {/* <Header /> */}
            <Box>
                <Headline>Let's work together!</Headline>
                <ContactMe />
            </Box>
        </Layout>
     );
}
 
export default Contact;

const Box = styled.div`
    ${Flex({fd:'column'})};
    text-align: center;
    margin-bottom: 55px;
`;

const Headline = styled.h3`
    text-align: center;
    font-family: ${title};
    color: ${yellow3};
    margin: 2.5% 1% 1%;
    ${below.large`
        font-size: 2.4rem;
    `}
    ${below.medium`
        font-size: 2rem;
    `}
`;