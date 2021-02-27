import React from 'react';
import styled from 'styled-components';
import { Flex, box_shadow2, white, black } from '../components/utilities';
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
      <IconCircle bkColor="git">
        <FiGithub />
      </IconCircle>
    </IconContext.Provider>
   );
}
 
export const LgLinkedIn = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: `${white}` }}
    >
      <IconCircle bkColor="link">
        <AiOutlineLinkedin />
      </IconCircle>
    </IconContext.Provider>
   );
}
 
export const LgPDF = () => {
  return ( 
    <IconContext.Provider
      value={{ color: `${white}`, size: '55px' }}
      
    >
      <IconCircle>
        <FaRegFilePdf />
      </IconCircle>
    </IconContext.Provider>
   );
}

export const LgMail = () => {
  return (
    <IconContext.Provider 
      value={{ size: '55px', color: `${white}` }}
    >
      <IconCircle>
        <BiMailSend />
      </IconCircle>
    </IconContext.Provider>
  )
}
 

const Footer = () => {
    return ( 
        <Foot>
          <FootDiv>
            <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
            <a rel="noreferrer" target="_blank" href="http://karenlobinperkincom/karenlobinperkinpdf" alt="link to Karen's resume in pdf format, opens new window"><LgPDF /></a>

          </FootDiv>
          <FootP>
            © {new Date().getFullYear()} Karen Lobin Perkins
            {/* , Built with {` `} */}
          </FootP>
        </Foot>
    );
}
 
export default Footer;

const Foot = styled.footer`
    background: ${black};
    ${Flex({ai:'center'})};
    max-height: 115px;
`;

const FootDiv = styled.div`
  margin-top: 10px; 
  ${Flex({jc:'center'})};
`;

export const IconCircle = styled.div`
    background: ${({bkColor}) => ((bkColor === 'git') ? '#6e5494' : (bkColor === 'link') ? '#0072b1' : '#ed2224')};
    border-radius: 50%;
    box-shadow: ${box_shadow2};
    width: 80px;
    height: 80px;
    ${Flex};
    margin: 30px;
    border: 1px solid white;
    `;

const FootP = styled.p`
    color: ${white};
    margin: 50px 30px 0 auto;
    /* padding-top: 70%; */
`;