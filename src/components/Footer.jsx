import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="https://be-practical.com/images/Be-logo.png" alt="Be Practical Tech Solutions Logo" width="180" />
              <p className="mt-3">
                Empowering future developers with our Fullstack Web Development Internship Program.
                Our 1-month full-stack web development internship program offers a unique opportunity to enhance your skills in front-end and back-end development. Dive into real-world projects, receive one-on-one mentorship, and build a portfolio that sets you up for success.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className='text-yellow'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className='text-white me-3 text-decoration-none '>Home</a></li>
              <li><a href="#tools" className='text-white me-3 text-decoration-none '>why this?</a></li>
              <li><a href="#days" className='text-white me-3 text-decoration-none '>in 1 Month</a></li>
              <li><a href="#overview" className='text-white me-3 text-decoration-none '>Program  Overview</a></li>
              <li><a href="#details" className='text-white me-3 text-decoration-none '>Internship Details</a></li>
              <li><a href="#contact" className='text-white me-3 text-decoration-none '>Contact</a></li>
              <li><a href="#faq" className='text-white me-3 text-decoration-none '>Frequently Asking Questions</a></li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className='text-yellow'>Follow Us</h5>
            <div className="footer-social">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-faq text-center py-2">
        &copy; {new Date().getFullYear()} Be Practical Tech Solutions. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
