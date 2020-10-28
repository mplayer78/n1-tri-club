import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/hero-banner"

const membershipQuery = graphql`
  query {
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "membership"}}}}) {
      nodes {
        id
        name
        imageSource {
          fluid {
            src
          }
        }
      }
    }
  }
`

const SecondPage = () => {
  const {images : {nodes : images}} = useStaticQuery(membershipQuery)
  return (
    <Layout>
      <SEO title="Page two" />
      <HeroBanner image={images[0]?.imageSource?.fluid?.src} label="Membership"/>
      <p>With membership enquires please contact us</p>
    </Layout>
  )
}

export default SecondPage
