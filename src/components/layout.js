/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Instagram from "./instagram/instagram"
import Nav from "./nav/nav"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Nav siteTitle={data.site.siteMetadata.title} />
      {/* <div
        style={{
          margin: 0,
          padding: 0,
        }}
      > */}
        {/* <main>{children}</main> */}
      {/* </div> */}
      {/* <Instagram />
      <Footer /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
