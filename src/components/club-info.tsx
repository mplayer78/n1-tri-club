import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Carousel from './carousel'

const query = graphql`
  query Slideshow {
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "slideshow"}}}}) {
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
    text : allContentfulSiteContent(filter: {name: {eq: "front page information"}}) {
    nodes {
      name
      bodyContent {
        json
      }
    }
  }
}
`
export default function ClubInfo() {
  const { images : { nodes : slideshowImages }, text : { nodes : text} } = useStaticQuery(query)
  return (
    <Fragment>
      <div className="front-page_info">
        <div className="front-page_info_text front-page_info_box">
        {documentToReactComponents(text[0].bodyContent.json)}
        </div>
        <div className="front-page_info_slideshow front-page_info_box">
          <Carousel slideshowImages={slideshowImages}/>
        </div>
      </div>
    </Fragment>
  )
}


