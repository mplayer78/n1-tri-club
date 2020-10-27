import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/hero-layout"
import { Document } from "@contentful/rich-text-types"

const query = graphql`
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
  const {member : {nodes : member}, images : {nodes : images}} = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Contacts" />
      <HeroLayout image={images[0].imageSource.fluid.src} label={"Contacts and Admin"}>
        <div className="commitee-members">
          {member.map((member: MemberInterface) => (
            <MemberDisplay {...member}/>
          ))}
        </div>
      </HeroLayout>
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

