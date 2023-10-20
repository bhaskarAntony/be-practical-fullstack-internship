import React from 'react'
import '../styles/register.css'

function Register() {
  return (
   <div className='p-3'>
    <h1 className="banner-heading mb-5">Register for <span className="text-main">Fullstack <br />Internship Program</span></h1>
     <div className='container register p-3'>
    <div className="row">
       <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Enter your Name' />
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder='Enter Email Address' />
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Phone Number</label>
                <input type="text" className="form-control" placeholder='Enter Phone Number' />
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
                <button className="btn-2 mt-4 py-3 hero-btn">Register</button>
            </div>
       </div>
        
    </div>
   </div>
  )
}

export default Register
