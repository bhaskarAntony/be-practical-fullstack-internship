import React from 'react'
import Hero from '../components/Hero'
import Benifits from '../components/Benifits'
import Projects from '../components/Projects'
import Register from '../components/Register'
import Days from '../components/Days'

function Home() {
  return (
    <div>
      <Hero/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Register/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Projects/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Days/>
    </div>
  )
}

export default Home
