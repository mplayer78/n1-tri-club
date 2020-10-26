import React, { Fragment, useState } from 'react'
import ClubInfo from '../components/club-info'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { Header } from '../components/header'

function HomePage() {
  return (
    <Layout>
      <Hero/>
      <ClubInfo/>
    </Layout>
    )
}

export default HomePage