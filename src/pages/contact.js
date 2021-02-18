import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import ContactMe from '../components/emailjs';
import { title, pine } from '../components/utilities';


const Contact = () => {
    return ( 
        <Layout>
            <Header />
            <div style={{margin:'0 auto', textAlign: 'center'}}>
                <Headline>Let's work together!</Headline>
                <ContactMe />
            </div>
        </Layout>
     );
}
 
export default Contact;

const Headline = styled.h4`
    text-align: center;
    font: ${title};
    color: ${pine};
    border-bottom: 5px dotted ${pine};
    margin: 0;
`;