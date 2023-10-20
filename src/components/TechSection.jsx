import React from 'react';
import '../styles/TechSection.css'; // Your CSS file

const technologies = [
  {
    title: 'MERN Stack',
    description:
      'Master the MERN (MongoDB, Express, React, Node.js) stack to build full-stack web applications.',
  },
  {
    title: 'Python Full Stack',
    description:
      'Learn Python for both front-end and back-end development to create versatile web solutions.',
  },
  {
    title: 'Java Full Stack',
    description:
      'Become proficient in Java for building scalable and high-performance full-stack applications.',
  },
  {
    title: 'HTML & CSS',
    description:
      'Get a solid foundation in HTML and CSS, the building blocks of web development.',
  },
  {
    title: 'Git & Version Control',
    description:
      'Master Git and version control to collaborate effectively and track code changes.',
  },
  {
    title: 'Responsive Design',
    description:
      'Create responsive and mobile-friendly web interfaces for a seamless user experience.',
  },
  {
    title: 'Database Management',
    description:
      'Understand database systems and data modeling for efficient data storage and retrieval.',
  },
  {
    title: 'API Integration',
    description:
      'Integrate with various APIs to access external data and services in your applications.',
  },
  // Add more technologies and tools
];

const TechSection = () => {
  return (
    <section className="tech-section">
      <div className="container">
        <h2 className="section-title">Technologies and Tools</h2>
        <p className="section-description">
          Explore the diverse technologies and tools you'll master during the Be Practical Fullstack Web Development Internship Program. Acquire the skills to build dynamic and robust web applications while working with industry-standard tools.
        </p>
        <div className="row">
          {technologies.map((tech, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="tech-card">
                <h3 className="tech-title text-yellow">{tech.title}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
