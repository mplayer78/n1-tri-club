import React, { Fragment, ReactChild, ReactChildren, ReactNode, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./styles.css"
import "typeface-source-sans-pro"
import { useUIState } from "../context/uiContext"
import { Header } from "./header"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }:LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
const { state: {menuExposed}, setMenuHidden } = useUIState()
useEffect(() => {
  setMenuHidden()
}, [])
  return (
    <Fragment>
      <div className="page">
      <Header/>
        <div className={`mask ${menuExposed ? "mask_exposed" : ""}`}/>
        {children}
      </div>
    </Fragment>
  )
}

export default Layout
