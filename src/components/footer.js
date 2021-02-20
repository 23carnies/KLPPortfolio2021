import React from 'react';
import styled from 'styled-components';
import { Flex, box_shadow2, white } from '../components/utilities';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf'
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { IconContext } from '@react-icons/all-files/'

export const LgGithub = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: `${white}` }}
    >
      <FootDiv bkColor="git">
        <FiGithub />
      </FootDiv>
    </IconContext.Provider>
   );
}
 
export const LgLinkedIn = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: `${white}` }}
    >
      <FootDiv bkColor="link">
        <AiOutlineLinkedin />
      </FootDiv>
    </IconContext.Provider>
   );
}
 
export const LgPDF = () => {
  return ( 
    <IconContext.Provider
      value={{ color: `${white}`, size: '55px' }}
      
    >
      <FootDiv>
        <FaRegFilePdf />
      </FootDiv>
    </IconContext.Provider>
   );
}

export const LgMail = () => {
  return (
    <IconContext.Provider 
      value={{ size: '55px', color: `${white}` }}
    >
      <FootDiv>
        <BiMailSend />
      </FootDiv>
    </IconContext.Provider>
  )
}
 

const Footer = () => {
    return ( 
        <Foot>
          <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
          <a rel="noreferrer" target="_blank" href="http://karenlobinperkincom/karenlobinperkinpdf" alt="link to Karen's resume in pdf format, opens new window"><LgPDF /></a>
          <FootP>
            © {new Date().getFullYear()} Karen Lobin Perkins
            {/* , Built with {` `} */}
          </FootP>
        </Foot>
    );
}
 
export default Footer;

const Foot = styled.footer`
    background: #000;
    ${Flex};
    max-height: 150px;
`;

export const FootDiv = styled.div`
    background: ${({bkColor}) => ((bkColor === 'git') ? '#6e5494' : (bkColor === 'link') ? '#0072b1' : '#ed2224')};
    border-radius: 50%;
    box-shadow: ${box_shadow2};
    width: 100px;
    height: 100px;
    ${Flex};
    margin: 30px;
    border: 1px solid white;
    `;

const FootP = styled.p`
    color: #fff;
    margin: 100px 30px 0 auto;
    /* padding-top: 70%; */
`;