import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/InternshipDetailsSection.css';

const InternshipDetailsSection = () => {
  return (
   <div className="p-2">
     <section className="internship-details p-3 container" id='details'>
      <Container>
        <Row className="align-items-center">
        <Col lg={6} className="details">
            <h2 className="details-title">Internship Details</h2>
            <p className="details-description">
              Our 1-month full-stack web development internship program offers a unique opportunity to enhance your skills in front-end and back-end development. Dive into real-world projects, receive one-on-one mentorship, and build a portfolio that sets you up for success.
            </p>
            <a href="#apply-now" className="btn bg-black text-white btn-lg details-button">Apply Now</a>
          </Col>
          <Col lg={6} className="text-center mt-4">
            <img
              src="https://img.freepik.com/free-psd/3d-rendering-graphic-design_23-2149667476.jpg"
              alt="Internship Image"
              className="img-fluid internship-image w-100"
            />
          </Col>
        
        </Row>
      </Container>
    </section>
   </div>
  );
};

export default InternshipDetailsSection;
