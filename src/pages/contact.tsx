import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/hero-banner"
import { Document } from "@contentful/rich-text-types"

export const contactsQuery = graphql`
  query {
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "contacts"}}}}) {
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

const Contacts = () => {
  const {images : {nodes : images}} = useStaticQuery(contactsQuery)
  return (
    <Layout>
      <SEO title="Contact Us" />
      <HeroBanner image={images[0].imageSource.fluid.src} label="Contact Us"/>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contacts

