import React from 'react'
import '../styles/projects.css'

const cards = [
    {
        title:"E-commerce Platform",
        card:"card1"
    },
    {
        title:"Social Media Dashboard:",
        card:"card2"
    },
    {
        title:"Real-time Chat Application",
        card:"card3"
    },
    {
        title:"Task Management System",
        card:"card4"
    },
    {
        title:"Blog and Content Management System",
        card:"card5"
    },
    {
        title:"Inventory Management System",
        card:"card6"
    }

]
function Projects() {
  return (
    <section className='container projects mt-4' id='projects'>
        <h1 className="banner-heading"><i class="bi bi-stars"></i> Projects In <span className="text-main">Internship</span></h1>
        <div className="row mt-3 p-3">
            {
                cards.map((item)=>(
                    <div className="col-12 col-md-12 col-lg-6">
                    <div className={`project-card p-lg-5  p-5 ${item.card}`}>
                        <h5 className="text-800 text-black bg-white p-1 px-3 rounded-5 p-tag"><i class="bi bi-stars"></i> Project</h5>
                        <h1 className="card-heading text-900 text-black">{item.title}</h1>
                    </div>
                </div>
                ))
            }
          
        </div>
        <div className="text-center">
        <a href="#register">
       <button className="btn-2">Register Now <i class="bi bi-chevron-double-right"></i></button>
       </a>
        </div>
    </section>
  )
}

export default Projects
