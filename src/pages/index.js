import React from "react"
import Logo from "../components/logopurple"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="br">hello</div>
    <div className="bl">hello</div>
    <div className="bt">hello</div>
  </Layout>
)

export default HomePage
