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
    trainingSessions : allContentfulTrainingSession {
      nodes {
        name
        description
        frequency
        regularDay
        startTime
        duration
        location
      }
    }
  }
`

interface TrainingSessionType {
  name: string
  description: string
  frequency: string
  regularDay: string
  startTime: string
  duration: string
  location: string
}

const Training = () => {
  const {images : {nodes : images}, trainingSessions : {nodes : trainingSessions}} = useStaticQuery(trainingQuery)
  return (
  <Layout>
    <SEO title="Training" />
    <HeroBanner image={images[0].imageSource.fluid.src} label={"Training & Events"}/>
    <div className="training-session_container">
      {trainingSessions.map((tSesh : TrainingSessionType) => (
        <div className="training-session_each">
          <h2>{tSesh.name}</h2>
          <h3>{tSesh.location}</h3>
          <h3>{tSesh.frequency} : {tSesh.regularDay}</h3>
          <h3>Starts at {tSesh.startTime} for {tSesh.duration}</h3>
          <p>{tSesh.description}</p>
        </div>
      ))}
    </div>
  </Layout>
  )
}

export default Training
