import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import HeroBanner from '../components/hero-banner'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function ClubEvent({ data }) {
  const {images : {nodes : images}, contentfulClubEvent : clubEvent } = data
  const dateString = new Date(clubEvent.eventDate).toUTCString();
  console.log('data', data)
  return (
  <Layout>
    <SEO title="Training" />
    <HeroBanner image={images[0].imageSource.fluid.src} label={"Club Event"}/>
    <div className="training-session_container">
        <div className="training-session_each">
          <div className="training-session_header">
            <h2>{clubEvent.name}</h2>
            <h2>{dateString}</h2>
          </div>
          <p>{clubEvent.description.description}</p>
        </div>
    </div>
  </Layout>
  )
}

export const page = graphql`
  query($contentful_id: String!) {
    contentfulClubEvent(contentful_id: {eq: $contentful_id}) {
      name
      description {
        description
      }
      eventDate
      contentful_id
      sessionType {
        name
        regularDay
      }
    }
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "training"}}}}) {
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