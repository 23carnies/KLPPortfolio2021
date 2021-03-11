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

const Layout = ({ children }) => {
  
  return (
    <>
      <HeaderNav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
