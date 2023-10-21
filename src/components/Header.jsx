import React, { useState } from 'react'
import '../styles/header.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className="nav-top bg-black text-white bg-faq text-center ">
        <p className="p-dark-small m-0">Become a Fullstack developer in 1 Month.<b><i class="bi bi-arrow-right"></i></b></p>
      </div>
      <nav class="navbar navbar-expand-lg px-4">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src="https://be-practical.com/images/Be-logo.png" alt="" /></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list text-white"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#tools" className='nav-link'>Why this?</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#days" className='nav-link'>in 1 Month</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#overview" className='nav-link'>Overview</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#details" className='nav-link'>Internship Details</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#faq" className='nav-link'>Faq</a>
        </li>
        <li class="nav-item dropdown">
         <a href="#contact" className='nav-link'>Contact</a>
        </li>
      </ul>
      <a href="#register" className='text-decoration-none'>
     <button className="w-100 btn-2" type="button">Register Now <i class="bi bi-chevron-double-right"></i></button>
     </a>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
