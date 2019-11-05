import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => (
  <Layout>
    <SEO title="What We Offer" />
    <h1>PAST EVENTS</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Events
