import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="What We Offer" />
    <p>What we offer</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
