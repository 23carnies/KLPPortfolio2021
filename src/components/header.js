// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as S from "./styledComponents"

const Header = () => (
  <S.Header>
    <S.Nav>
      <S.NavItem to="/">Home</S.NavItem>
      <S.NavItem type="about" to="/about">About</S.NavItem>
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
