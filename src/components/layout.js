/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import HeaderNav from './nav';
import Footer from "./footer"
import "./layout.css"
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utilities/Themes";

const Layout = ({ children }) => {
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <HeaderNav />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
