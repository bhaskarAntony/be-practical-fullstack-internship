import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Register from '../components/Register'
import Days from '../components/Days'
import ProgramOverviewSection from '../components/ProgramOverviewSection'
import InternshipDetailsSection from '../components/InternshipDetailsSection'
import FAQ from '../components/FAQ'
import TechSection from '../components/TechSection'
import Responsibilities from '../components/Responsibilities'
import ContactInformation from '../components/ContactInformation'
import Follow from '../components/Follow'

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
 
       <InternshipDetailsSection/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Follow/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <ProgramOverviewSection/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
       <Projects/>
       <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <TechSection/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Responsibilities/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <Days/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <FAQ/>
      <div className="text-center d-flex justify-content-center">
      <div className="devider"></div>
      </div>
      <ContactInformation/>
    </div>
  )
}

export default Home
