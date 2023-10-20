import React, { useState, useEffect } from 'react';
import '../styles/hero.css';

function Hero() {
  const [particles, setParticles] = useState([]);

  // Function to create particles
  const createParticle = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 30 + 3; // Adjust the size range as needed
    const opacity = Math.random() * 0.7 + 0.3; // Adjust the opacity range as needed
    const particle = {
      id: Date.now(),
      x,
      y,
      size,
      opacity,
      speedX: (Math.random() - 0.5) * 20,
      speedY: (Math.random() - 0.5) * 20,
    };
    setParticles((prevState) => [...prevState, particle]);
  };

  // Function to update particles' positions
  const updateParticles = () => {
    setParticles((prevState) =>
      prevState.map((particle) => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
      }))
    );
  };

  // Create particles continuously
  useEffect(() => {
    const interval = setInterval(() => {
      createParticle();
    }, 100); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Update particles' positions
  useEffect(() => {
    const animationFrame = requestAnimationFrame(updateParticles);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [particles]);

  return (
    <div
      className='hero-main container-fluid p-lg-3 p-2 overflow-hidden'
    >
      <div className="hero">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="left-hero p-lg-4 p-3 mt-lg-5 m-3">
              <h1 className="heading text-900 text-black text-white">
                Fullstack Web Development <span className="text-main">Internship Program</span>
              </h1>
              <p className="subtitle text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cupiditate possimus eaque consectetur obcaecati id.
              </p>
              <button className="btn-2 hero-btn p-3 px-5 mt-4 bg-black">
                Register Now <i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="right-hero">
              <img
                src="https://assets.website-files.com/64a2bba3428de7ae0c1b5db5/64a405f2b38c92a6819dc840_Hero%20V2%20Image-p-1080.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: `${particle.y}px`,
            left: `${particle.x}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `rgba(255, 255, 255, ${particle.opacity})`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Hero;
