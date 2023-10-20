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
      <div className="nav-top bg-black text-white gradient text-center ">
        <p className="p-dark-small m-0">Become a Fullstack developer in 1 Month.<b><i class="bi bi-arrow-right"></i></b></p>
      </div>
      <nav class="navbar navbar-expand-lg px-4">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src="https://be-practical.com/images/Be-logo.png" alt="" /></a>
    <Button variant="black" onClick={handleShow} className='bg-black d-lg-none'>
    <i class="bi bi-list text-white fs-1"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-lg-none bg-black">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-900'>
          <a class="navbar-brand" href="/"> <img src="https://be-practical.com/images/Be-logo.png" alt="" /></a>
            <h2 className='text-main text-white'>FullstackInternship Program </h2> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         <ul className='text-black list-unstyled p-0'>
          <li className="nav-item"><a href="/" className="nav-link nav-text text-white mb-4 fs-3">Home</a></li>
        <li className="nav-item"><a href="/" className="nav-link nav-text text-white mb-4 fs-3">Certificate</a></li>
        <li className="nav-item"><a href="/" className="nav-link  nav-text text-white mb-4 fs-3">Why this?</a></li>
        <li className="nav-item"><a href="/" className="nav-link  nav-text text-white mb-4 fs-3">in 1 Month</a></li>
          <hr />
          <a href="/register" className='text-decoration-none mb-3'>
     <button class="w-100 main-btn w-100" type="button"><i class="bi bi-taxi-front"></i>Register Now</button>
     </a>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
         <a href="" className='nav-link'>Certificate</a>
        </li>
        <li class="nav-item dropdown">
         <a href="" className='nav-link'>Why this?</a>
        </li>
        <li class="nav-item dropdown">
         <a href="" className='nav-link'>in 1 Month</a>
        </li>
      </ul>
      <a href="/register" className='text-decoration-none'>
     <button className="w-100 main-btn" type="button">Register Now </button>
     </a>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
