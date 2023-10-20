import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/ProgramOverviewSection.css';

const ProgramOverviewSection = () => {
  return (
    <section className="program-overview p-3">
      <Container>
        <Row>
          <Col lg={6} className="text-center mb-4">
            <img
              src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
              alt="Program Image"
              className="img-fluid program-image"
            />
          </Col>
          <Col lg={6} className="program-details">
            <h2 className="program-title">Program Overview</h2>
            <p className="program-description">
              Our 1-month full-stack web development internship program is designed to provide hands-on experience in front-end and back-end development. You'll work on real projects, learn from experienced mentors, and build a solid foundation in web development.
            </p>
            <a href="#apply-now" className="btn btn-outline-light btn-lg program-button">Apply Now</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramOverviewSection;
