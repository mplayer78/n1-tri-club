import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


const query = graphql`
  query Hero {
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
    text : allContentfulSiteContent(filter: {name: {eq: "Hero Overlay"}}) {
    nodes {
      name
      bodyContent {
        json
      }
    }
  }
}
`

export default function Hero() {
  const { images : {nodes : images}, text : {nodes : text} } = useStaticQuery(query)
  const currentImage = images[Math.floor(Math.random()*images.length)]
  return (
    <Fragment>
      <div className="hero" style={{backgroundImage: `linear-gradient(#333333cc, #33333333),
    url(${currentImage.imageSource.fluid.srcWebp})`}}>
      <div className="hero-overlay">
        {documentToReactComponents(text[0].bodyContent.json)}
      </div>
    </div>
    </Fragment>
  )
}
