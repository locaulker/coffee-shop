import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImgComp from '../components/Globals/BackgroundImageComp'

import Info from '../components/Home/Info'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"keywords={['gatsby', 'application', 'react']} />
    <BackgroundImgComp 
      img = {data.img.childImageSharp.fluid} 
      title="gourmet exclusive"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)
export default IndexPage


export const query = graphql`
  {
    img: file(relativePath: {eq: "coffee-shop-bg3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
