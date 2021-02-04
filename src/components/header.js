// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as S from "./styledComponents"

const Header = ({ siteTitle }) => (
  
  <S.Header>
    <S.Nav>
      <S.Name to="/">{siteTitle}</S.Name>
      <S.About to="/about">About</S.About>
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
