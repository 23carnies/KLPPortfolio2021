import React from 'react'
import * as S from './styledComponents';

const ProjectCard = ({ title, description, image, openLink, gitLink }) => {
    return ( 
        <S.Layout>
            <S.Card>
                <S.Image src={image}></S.Image>
                <S.HTwo>{title}</S.HTwo>
                {/* <S.Pgraph>{description}</S.Pgraph> */}
                <div>
                    <S.BTN type="open" src={openLink}>Open</S.BTN>
                    <S.BTN src={gitLink}>Github</S.BTN>
                </div>
            </S.Card>
        </S.Layout>
     );
}
 
export default ProjectCard;