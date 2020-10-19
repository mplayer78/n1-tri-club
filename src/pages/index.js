import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import ClubInfo from "../components/club-info";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <ClubInfo/>
  </Layout>
)

export default IndexPage
