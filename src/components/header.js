import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as S from "./styledComponents"

const Header = ({ siteTitle }) => (
  
  <S.Header>
      <S.Effect>
        <S.Name to="https://www.linkedin.com/in/karen-lobin-perkins/">{siteTitle}</S.Name>
        <S.Gradient></S.Gradient>
        <S.Dodge></S.Dodge>
      </S.Effect>
    <S.Nav>
      {/* <S.Effect type="about">
        <S.About to="/about">About</S.About>
        <S.Gradient></S.Gradient>
        <S.Dodge></S.Dodge>
      </S.Effect>
      <S.Effect>
        <S.Projects to="/projects">Projects</S.Projects>
        <S.Gradient></S.Gradient>
        <S.Dodge></S.Dodge>
      </S.Effect>
      <S.Effect>
        <S.Contact to="/contact">Contact</S.Contact>
        <S.Gradient></S.Gradient>
        <S.Dodge></S.Dodge>
      </S.Effect> */}
      <S.NavItem to="/about">About</S.NavItem>
      <S.NavItem to="/projects">Projects</S.NavItem>
      <S.NavItem to="/contact">Contact</S.NavItem>
    </S.Nav>
  </S.Header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
