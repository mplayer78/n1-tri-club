import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/hero-banner"
import { Document } from "@contentful/rich-text-types"

export const contactsQuery = graphql`
  query AdminInfo {
    member : allContentfulCommitteeMember {
      nodes {
        name
        position
        image {
          fluid {
            src
          }
        }
        description {
          json
        }
      }
    }
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

interface MemberInterface {
  image: { 
    fluid: { 
      src: string | undefined 
    }
  }
  name: string; 
  position: string; 
  description: { 
    json: Document 
  }
}

const Contacts = () => {
  const {member : {nodes : member}, images : {nodes : images}} = useStaticQuery(contactsQuery)
  return (
    <Layout>
      <SEO title="Contact Us" />
      <HeroBanner image={images[0].imageSource.fluid.src} label="Contact Us"/>
      <div className="commitee-members">
        {member.map((member: MemberInterface) => (
          <MemberDisplay {...member}/>
        ))}
      </div>
    </Layout>
  )
}

export default Contacts

function MemberDisplay(member: MemberInterface) {
  return <div className="member-display">
    <div className="member-display_img-container">
      <img src={member.image.fluid.src} alt={member?.name ?? undefined} />
    </div>
    <div className="member-display_info-container">
      <h3>{member.name}</h3>
      <h4>{member.position}</h4>
      {documentToReactComponents(member.description.json)}
    </div>
  </div>
}

