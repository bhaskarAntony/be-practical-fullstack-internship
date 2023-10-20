import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/InternshipDetailsSection.css';

const InternshipDetailsSection = () => {
  return (
   <div className="p-2">
     <section className="internship-details p-3 container">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTWn_GU5WZ5p8avXcciHxgC4oC3KzYq2ff4xi4Blp5c6HnckvJ4NlGdfKyhUIWv-tRsI&usqp=CAU"
              alt="Internship Image"
              className="img-fluid internship-image"
            />
          </Col>
          <Col lg={6} className="details">
            <h2 className="details-title">Internship Details</h2>
            <p className="details-description">
              Our 1-month full-stack web development internship program offers a unique opportunity to enhance your skills in front-end and back-end development. Dive into real-world projects, receive one-on-one mentorship, and build a portfolio that sets you up for success.
            </p>
            <a href="#apply-now" className="btn bg-black text-white btn-lg details-button">Apply Now</a>
          </Col>
        </Row>
      </Container>
    </section>
   </div>
  );
};

export default InternshipDetailsSection;
