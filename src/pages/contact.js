import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import ContactMe from '../components/emailjs';
import { Flex, title, yellow3, orange3 } from '../components/utilities';


const Contact = () => {
    return ( 
        <Layout>
            <Header />
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
    width: 100%;
    text-align: center;
    /* background: ${orange3}; */
`;

const Headline = styled.h4`
    text-align: center;
    font: ${title};
    color: ${yellow3};
    border-bottom: 5px dotted ${yellow3};
    margin: 0;
`;