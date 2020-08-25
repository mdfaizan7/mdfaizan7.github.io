import React from "react"

import SEO from "../components/seo"
import Splash from "../components/Splash"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <SEO title="Home" />
    <Splash />
  </div>
)

export default IndexPage
