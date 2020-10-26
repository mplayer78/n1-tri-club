import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel';
import './carousel.css'

interface imageInterface {
  id: string,
  name: string,
  imageSource: {
    fluid: {
      src: string
    }
  }
}

export default function Carousel({slideshowImages} : {slideshowImages: imageInterface[]}) {
  return <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={100}
    totalSlides={slideshowImages?.length || 0}
    isPlaying={true}
    infinite={true}
    interval={5000}
  >
    <Slider>
      {slideshowImages.map((image: imageInterface, index: number) => (
        <Slide index={index} key={image.id}>
          <Image hasMasterSpinner={true} src={image.imageSource.fluid.src} />
        </Slide>
      ))}
    </Slider>
    <ButtonBack>{"<"}</ButtonBack>
    <ButtonNext>{">"}</ButtonNext>
    <DotGroup />
  </CarouselProvider>;
}
