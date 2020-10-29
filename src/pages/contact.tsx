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
        <fieldset className="contact-form">

        <input type="hidden" name="form-name" value="contact" />
        <label className="contact-label">Your Name:</label>
        <input type="text" name="name"/>
        <label className="contact-label">Your Email:</label>
        <input type="email" name="email"/>
        <label className="contact-label">Message:</label>
        <textarea name="message" style={{resize: "none"}}></textarea>
        <button className="contact-submit" type="submit">Send</button>
        </fieldset>
      </form>
    </Layout>
  )
}

export default Contacts

