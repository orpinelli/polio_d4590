import React from 'react'
import Section1 from '../../components/section1/section1'
import Section2 from '../../components/section2/section2'
import Section3 from '../../components/section3/section3'
import Section4 from '../../components/section4/section4'
import Section5 from '../../components/section5/section5'
import Section6 from '../../components/section6/section6'
import styles from '../../styles/Home.module.css'

import { Element } from 'react-scroll'

function Home() {
  return (
    <div>
      <header></header>
      <main>
        <Element name="section1">
          <Section1 />
        </Element>
        <Element name="section2">
          <Section2 />
        </Element>
        <Element name="section2">
          <Section3 />
        </Element>
        <Element name="section2">
          <Section4 />
        </Element>
        <Element name="section2">
          <Section5 />
        </Element>
        <Element name="section2">
          <Section6 />
        </Element>
      </main>
    </div>
  )
}

export default Home
