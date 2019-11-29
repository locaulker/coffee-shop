import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImgComp from '../components/Globals/BackgroundImageComp'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"keywords={['gatsby', 'application', 'react']} />
    <BackgroundImgComp 
      img = {data.img.childImageSharp.fluid} 
      title="Gourmet Coffee Shop"
      styleClass="default-background"
    />
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
