import React from 'react'
import Hero from '../components/Hero'
import Benifits from '../components/Benifits'
import Projects from '../components/Projects'
import Register from '../components/Register'
import Days from '../components/Days'
import ProgramOverviewSection from '../components/ProgramOverviewSection'
import InternshipDetailsSection from '../components/InternshipDetailsSection'
import Calendar from '../components/Calendar'

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
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <ProgramOverviewSection/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <InternshipDetailsSection/>
    </div>
  )
}

export default Home
