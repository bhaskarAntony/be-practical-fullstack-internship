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
    <div className='container projects mt-4'>
        <h1 className="banner-heading">Projects In <span className="text-main">Internship</span></h1>
        <div className="row mt-3">
            {
                cards.map((item)=>(
                    <div className="col-12 col-md-12 col-lg-6">
                    <div className={`project-card p-5 ${item.card}`}>
                        <h5 className="text-800 text-black">Project</h5>
                        <h1 className="card-heading text-900 text-white">{item.title}</h1>
                    </div>
                </div>
                ))
            }
          
        </div>
    </div>
  )
}

export default Projects