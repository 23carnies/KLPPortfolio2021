import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

import { Flex, white, grey, teal, label, box_shadow4, btn_active } from './utilities';

export default function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fp4x07k', 'template_hcdqfjl', e.target, 'user_dBWjognYia9FPfnHZyQpN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <Input type="hidden" name="contact_number"/>
      <Label>Name</Label>
      <Input type="text" name="user_name" placeholder="Your name..."/>
      <Label>Email</Label>
      <Input type="email" name="user_email" placeholder="Your email..."/>
      <Label>Message</Label>
      <Input name="message" placeholder="Your message..." />
      <Input type="submit" value="Send" />
    </Form>
  );
}

const Form = styled.form`
    ${Flex({fd:'column'})};
    padding: 25px;

`;

const Input = styled.input`
    max-width: 750px;
    width: ${({type}) => (type === 'submit') ? '25%' : '60%'};
    background: ${({type}) => (type === 'submit') ? `${teal}` : `${white}`};
    color: ${({type}) => (type === 'submit' ? `${white}` : `${grey}`)};
    font: ${label};
    padding: 1.5%;
    margin: 2%;
    border-radius: 8px;
    box-shadow: ${({type}) => (type === 'submit' ? `${box_shadow4}` : 'none')};
    
    :hover {
        box-shadow: ${({type}) => (type === 'submit' ? `${btn_active}` : 'none')};

    }
`;

const Label = styled.label`
    color: ${white};
    font: ${label};
`;