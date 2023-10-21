import React, { useEffect, useState } from 'react'
import '../styles/days.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const internshipData = [
  {
    days: "Day 1",
    title: "Project Assignment and Introduction",
    content: [
      "You will be assigned a full-stack project by the Be Practical Tech Solution team.",
      "Meet your mentor and the back-end development team to understand the project's goals, features, and expected outcomes.",
    ],
  },
  {
    days: "Day 2-3",
    title: "Project Architecture Review",
    content: [
      "Dive into the project's architecture, understanding how the front-end and back-end components will interact.",
      "Identify and document key endpoints, data sources, and APIs that your front-end will utilize.",
    ],
  },
  {
    days: "Day 4-5",
    title: "User Stories and Requirements",
    content: [
      "Collaborate with the back-end team to define user stories and project requirements.",
      "Document these requirements clearly to ensure a shared understanding of the project scope.",
    ],
  },
  {
    days: "Day 6-7",
    title: "Initial Documentation",
    content: [
      "Begin your project documentation, including:",
      "A project overview describing the mission and vision.",
      "Detailed user stories and acceptance criteria.",
      "Preliminary wireframes or design concepts illustrating the user interface.",
    ],
  },
  {
    days: "Day 8-21",
    title: "Development",
    content: [
      "Begin crafting the front-end of your assigned project. Your focus will be on creating a user-friendly, responsive front-end application.",
      "Collaborate closely with the back-end development team to ensure seamless integration between the front-end and their APIs.",
    ],
  },
  {
    days: "Day 22-23",
    title: "Testing and Debugging",
    content: [
      "Thoroughly test your front-end application, identifying and fixing any issues. Pay special attention to user experience and ensuring the user interface works flawlessly.",
      "Conduct rigorous testing to verify that the front-end communicates effectively with the back-end.",
    ],
  },
  {
    days: "Day 24-26",
    title: "Documentation",
    content: [
      "Keep your project documentation up-to-date:",
      "Record any issues encountered during development and your solutions.",
      "Highlight any complex technical challenges and how they were addressed.",
      "Document the tools, libraries, and frameworks used during front-end development.",
    ],
  },
  {
    days: "Day 27",
    title: "Final Testing and Refinements",
    content: [
      "Perform a final round of testing and make any necessary refinements to your front-end application.",
      "Verify that the front-end is fully functional and performs effectively with the back-end.",
    ],
  },
  {
    days: "Day 28-29",
    title: "Project Presentation and Documentation Completion",
    content: [
      "Prepare to present your front-end project to the internship group:",
      "Showcase its features, functionality, and user interface.",
      "Discuss any challenges faced during development and the creative solutions you applied.",
      "Highlight the successful collaboration between front-end and back-end teams.",
    ],
  },
];

function Days() {
    const [slidesToShow, setSlidesToShow] = useState(6); // Default to showing 3 slides

    useEffect(() => {
      // Check the screen width and update the number of slides to show
      const handleResize = () => {
        if (window.innerWidth <= 600) {
          setSlidesToShow(1); // On smaller screens, show only 1 slide
        } else if(window.innerWidth<=900) {
          setSlidesToShow(1); // On wider screens, show 3 slides
        }
        else{
            setSlidesToShow(2); // On wider screens, show 3 slides
        }
      };
    
      // Call the handleResize function initially and add a resize event listener
      handleResize();
      window.addEventListener('resize', handleResize);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000, // Change delay as needed
            prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
            nextArrow: <button className="slick-next">Next</button>, // Add next arrow
          };
  return (

    <section className="container-fluid main-company-container overflow-hidden" id='days'>
      <div className="companies container-fluid">
        <div className="companies-brands-container container-fluid p-2">
            <h1 className="banner-heading">What you will Do Over <br /> 1 Month <span className='text-main'></span><span className="text-main">full stack development internship</span></h1>
          <div className="row">
          <Slider {...settings}>
                {internshipData.map((item, index) => (
                  <div className="col-12 col-md-12 col-lg-6 p-2" key={index}>
                    <div className="week1-card">
                     <h4>{item.days}</h4>
                     <h3 className='card-heading text-900'>{item.title}</h3>
                    <ul>
                    {item.content.map((contentItem, contentIndex) => (
                  <li key={contentIndex}><p className="card-p">
                    {contentItem}
                    </p></li>
            ))}
                    </ul>
                    </div>
                  </div>
                ))}
              </Slider>
              
          </div>
        </div>
      </div>
      <div className="text-center">
      <a href="#register">
       <button className="btn-2">Register Now <i class="bi bi-chevron-double-right"></i></button>
       </a>
      </div>
    </section>
  )
}

export default Days
