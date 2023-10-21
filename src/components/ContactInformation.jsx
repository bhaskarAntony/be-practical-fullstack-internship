import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/ContactInformation.css';
import Aos from 'aos';

const ContactInformation = () => {
  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <section className="contact-information p-3">
      <h1 className="banner-heading">Feel Free To <span className="text-main">Contact</span></h1>
      <div className='container'>
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-12 col-lg-6">
            <div className="info-card bg-faq" data-aos="fade-right">
              <h2 className="info-title">Contact Information</h2>
              <ul className="info-list">
                <li>
                  <strong>Address:</strong>737C, 1st Floor, 1st Cross Road 3rd Stage, 4th Block Basaveshwaranagar, Bangalore, Karnataka-560079
                </li>
                <li>
                  <strong>Email:</strong> adarsh@bepracticals.com
                </li>
                <li>
                  <strong>Phone:</strong> +92 9481090986
                </li>
              </ul>
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
            <div className="map-card w-100" data-aos="fade-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6692316202066!2d77.53650917413783!3d12.992995314410722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ad89380bd%3A0xe619385693ac1684!2sBe%20Practical!5e0!3m2!1sen!2sin!4v1697860143812!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 rounded-5'></iframe>
            </div>
            </div>
          </div>
         
      </div>
      <div className="text-center">
       <a href="#register">
       <button className="btn-2">Register Now</button>
       </a>
      </div>
    </section>
  );
};

export default ContactInformation;
