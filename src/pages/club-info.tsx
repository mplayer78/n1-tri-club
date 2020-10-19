import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  query ClubInfo {
    text : allContentfulSiteContent(filter: {name: {eq: "Club Info"}}) {
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
  const {text : {nodes : text}} = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Club Information" />
      {documentToReactComponents(text[0].bodyContent.json)} 
    </Layout>
  )
}

export default ClubInfo
