import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/hero-banner"

const query = graphql`
  query {
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "hero"}}}}) {
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
    text : allContentfulSiteContent(filter: {name: {eq: "Club Information"}}) {
      nodes {
        name
        bodyContent {
          json
        }
      }
    }
  }
`
const ClubInfo = () => {
  const {text : {nodes : text}, images : {nodes : images}} = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Club Information" />
      <HeroBanner image={images[0].imageSource.fluid.src} label={text[0].name}/>
      {documentToReactComponents(text[0].bodyContent.json)} 
    </Layout>
  )
}

export default ClubInfo
