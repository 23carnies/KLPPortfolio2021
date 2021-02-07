import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { FaRegFilePdf } from '@react-icons/all-files/fa/FaRegFilePdf'
import { IconContext } from '@react-icons/all-files/'
import * as S from './styledComponents'

const LgGithub = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: '#fff' }}
    >
      <S.FootDiv bkColor="git">
        <FiGithub />
      </S.FootDiv>
    </IconContext.Provider>
   );
}
 
const LgLinkedIn = () => {
  return ( 
    <IconContext.Provider
      value={{ size: '55px', color: '#fff' }}
    >
      <S.FootDiv bkColor="link">
        <AiOutlineLinkedin />
      </S.FootDiv>
    </IconContext.Provider>
   );
}
 
const LgPDF = () => {
  return ( 
    <IconContext.Provider
      value={{ color: '#fff', size: '55px' }}
      
    >
      <S.FootDiv>
        <FaRegFilePdf />
      </S.FootDiv>
    </IconContext.Provider>
   );
}
 

const Footer = () => {
    return ( 
        <S.Footer>
          <a rel="noreferrer" target="_blank" href="https://github.com/23carnies" alt="Github logo, opens new window to Karen's Github page"><LgGithub /></a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karen-lobin-perkins/" alt="LinkedIn logo, opens new window to Karen's LinkedIn page"><LgLinkedIn /></a>
          <a rel="noreferrer" target="_blank" href="http://karenlobinperkins.com/karenlobinperkins.pdf" alt="link to Karen's resume in pdf format, opens new window"><LgPDF /></a>
          <S.FootP>
            © {new Date().getFullYear()} Karen Lobin Perkins
            {/* , Built with {` `} */}
          </S.FootP>
        </S.Footer>
    );
}
 
export default Footer;