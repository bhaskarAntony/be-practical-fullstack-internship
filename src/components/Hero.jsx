import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <div className='hero-main container-fluid p-lg-3 p-2'>
    <div className="hero">
    <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
            <div className="left-hero p-lg-4 p-3 mt-lg-5 m-3">
                <h1 className="heading text-900 text-black text-white">Fullstack Web Development <span className="text-main">Internship Program</span></h1>
                <p className="subtitle text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cupiditate possimus eaque consectetur obcaecati id.</p>
                <button className="btn-2 hero-btn p-3 px-5 mt-4 bg-black">Register Now <i class="bi bi-chevron-double-right"></i></button>

            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
            <div className="right-hero">
                <img src="https://assets.website-files.com/64a2bba3428de7ae0c1b5db5/64a405f2b38c92a6819dc840_Hero%20V2%20Image-p-1080.png" alt="" className="w-100" />
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
