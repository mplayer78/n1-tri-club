import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
    trainingSessions : allContentfulTrainingSession (sort: {fields: club_event___sessionType___club_event___eventDate, order: ASC}){
      nodes {
        id
        name
        description
        frequency
        regularDay
        startTime
        duration
        location
        club_event {
          eventDate(difference: "days")
          contentful_id
          alertMessage
        }
      }
    }
  }
`

interface TrainingSessionType {
  id: string
  name: string
  description: string
  frequency: string
  regularDay: string
  startTime: string
  duration: string
  location: string
  club_event: Array<{
    eventDate: string
    contentful_id: string
    alertMessage: string
  }>
}

const Training = () => {
  const {images : {nodes : images}, trainingSessions : {nodes : trainingSessions}} = useStaticQuery(trainingQuery)
  return (
  <Layout>
    <SEO title="Training" />
    <HeroBanner image={images[0].imageSource.fluid.src} label={"Training & Events"}/>
    <div className="training-session_container">
      {trainingSessions.map((tSesh : TrainingSessionType) => {
        const futureEvents = tSesh.club_event ? tSesh.club_event.filter(ev => parseInt(ev.eventDate) <= 0) : []
        return (
          <div className="training-session_each" key={tSesh.id}>
            <h2>{tSesh.name}</h2>
            <h3>{tSesh.location}</h3>
            <h3>{tSesh.frequency} : {tSesh.regularDay}</h3>
            <h3>Starts at {tSesh.startTime} for {tSesh.duration}</h3>
            <p>{tSesh.description}</p>
            {futureEvents.length > 0 && <Link to={`${futureEvents[0].contentful_id}`}>
              <button className="more-information" disabled={futureEvents[0].alertMessage.length>0}>
                <h3>
                  Upcoming Event.
                  <span style={{color: "red"}}>{futureEvents[0].alertMessage}</span>
                  More info...
                </h3>
              </button>
            </Link>}
          </div>
        )
      })}
    </div>
  </Layout>
  )
}

export default Training
