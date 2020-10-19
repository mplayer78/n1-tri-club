import React, { Fragment } from 'react'

export default function HeroLayout({children, image, label}) {
  return (
    <Fragment>
      <div className="hero" style={{backgroundImage: `linear-gradient(#333333cc, #33333333),
    url(${image})`}}>
      <div className="hero-overlay">
        <h1 style={{width: "100%"}}>
          {label}
        </h1>
      </div>
    </div>
    {children}
    </Fragment>
  )
}
