import React from 'react'
import * as S from '../styledComponents';

const ProjectCard = ({ title, description, image, openLink, gitLink }) => {
    return ( 
        <S.Card>
            <S.Image src={image}></S.Image>
            <S.HTwo>{title}</S.HTwo>
            <S.Pgraph>{description}</S.Pgraph>
            <S.Link open src={openLink}>Open</S.Link>
            <S.Link git src={gitLink}>Github</S.Link>
        </S.Card>
     );
}
 
export default ProjectCard;