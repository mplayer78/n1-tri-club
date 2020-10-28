import React, { Fragment } from 'react'

interface HeroLayoutProps {
  image: string
  label: string
}

export default function HeroBanner({image, label}: HeroLayoutProps) {
  return (
    <Fragment>
      <div className="hero-banner_image" style={{backgroundImage: `linear-gradient(#333333cc, #33333333),
    url(${image})`}}/>
      <div className="hero-banner_overlay">
        <h1 style={{width: "100%"}}>
          {label}
        </h1>
      </div>
    </Fragment>
  )
}
