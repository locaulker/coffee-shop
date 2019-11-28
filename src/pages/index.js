import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {FaGulp} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-yellow">Hi people</h1>
    <h2>Hi people</h2>
    <h3>Hi people</h3>
    <h4>Hi people</h4>
    <h5>Hi people</h5>
    <h6>Hi people</h6>
    <p>Welcome to your new Gatsby site.</p>
    <FaGulp />
  
  </Layout>
)

export default IndexPage
