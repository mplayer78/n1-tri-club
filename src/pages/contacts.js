import React from "react"
import { useStaticQuery } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/hero-layout"

const query = graphql`
  query AdminInfo {
    member : allContentfulCommitteeMember {
      nodes {
        name
        position
        image {
          fluid {
            srcWebp
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
            srcWebp
          }
        }
      }
    }
  }
`

const Contacts = (data) => {
  const {member : {nodes : member}, images : {nodes : images}} = useStaticQuery(query)
  console.log('member', member)
  return (
    <Layout>
      <SEO title="Contacts" />
      <HeroLayout image={images[0].imageSource.fluid.srcWebp} label={"Contacts and Admin"}>
        <div className="commitee-members">
          {member.map(member => (
            <div className="member-display">
              <div className="member-display_img-container">
                <img src={member.image.fluid.srcWebp} alt={member.name}/>
              </div>
              <div className="member-display_info-container">
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                {documentToReactComponents(member.description.json)}
              </div>
            </div>
          ))}
        </div>
      </HeroLayout>
    </Layout>
  )
}

export default Contacts
