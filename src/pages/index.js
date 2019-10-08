import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="lbt">le bon temps</div>
    <div>Travel + Events</div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/about/">About</Link></div>
    <div><Link to="/contact/">Contact</Link></div>
  </Layout>
)

export default IndexPage
