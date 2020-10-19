import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const query = graphql`
  query Slideshow {
    images : allContentfulSiteImage(filter: {tags: {elemMatch: {tagName: {eq: "slideshow"}}}}) {
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

export default function ClubInfo(props) {
  const { images : { nodes : slideshowImages }, text : { nodes : text} } = useStaticQuery(query)
  console.log('text', text)
  return (
    <Fragment>
      <div className="club-information">
      <div className="club-information_text">
        {documentToReactComponents(text[0].bodyContent.json)}
      </div>
      <div className="club-information_image">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={slideshowImages.length}
      >
        <Slider>
          {slideshowImages.map((image, index) => (
            <Slide index={index} key={image.id}>
              <Image src={image.imageSource.fluid.srcWebp}/>
            </Slide>
          ))}
        </Slider>
        <ButtonBack>{"<"}</ButtonBack>
        <ButtonNext>{">"}</ButtonNext>
        <DotGroup/>
      </CarouselProvider>
      </div>
    </div>
    </Fragment>
  )
}
