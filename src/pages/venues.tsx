import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/hero-banner"

const trainingQuery = graphql`
  query {
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

const venuesList = [
  {
    name: "Sidmouth Pool",
    location: "Ham Lane, Sidmouth, EX10 8XR",
    coords: ["50.679479","-3.2354094"],
    pluscode: "MQH7+PR Sidmouth"
  },
  {
    name: "Ottery Cross",
    location: "Broad Street, Ottery St. Mary, EX11 1BT",
    coords: ["50.751281", "-3.2794862"],
    pluscode: "QP2C+G6 Ottery Saint Mary"
  }
]

const Venues = () => {
  const {images : {nodes : images}} = useStaticQuery(trainingQuery)
  return (
  <Layout>
    <SEO title="Training" />
    <HeroBanner image={images[0].imageSource.fluid.src} label={"Regular Club Venues / Locations"}/>
    <div className="training-session_container">
      {venuesList.map(venue => (
        <div className="training-session_each">
          <h2>{venue.name}</h2>
          <h3>{venue.location}</h3>
          <h3>{venue.coords[0]}, {venue.coords[1]}</h3>
        </div>
      ))}
    </div>
  </Layout>
  )
}

export default Venues
