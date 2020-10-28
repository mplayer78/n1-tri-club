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
          fluid(sizes: "2000") {
            src
          }
        }
      }
    }
    text : allContentfulSiteContent(filter: {name: {eq: "Front Page Hero"}}) {
    nodes {
      name
      bodyContent {
        json
      }
    }
  }
}
`

export default function Hero(){
  const { images : {nodes : images}, text : {nodes : text} } = useStaticQuery(query)
  const currentImage = images[Math.floor(Math.random()*images.length)]
  return (
    <Fragment>
      <div className="hero-image" style={{backgroundImage: `linear-gradient(#333333cc, #33333333),
    url(${currentImage.imageSource.fluid.src})`}}>
      </div>
      <div className="hero-text">
      {documentToReactComponents(text[0].bodyContent.json)}
      </div>
    </Fragment>
  )
}