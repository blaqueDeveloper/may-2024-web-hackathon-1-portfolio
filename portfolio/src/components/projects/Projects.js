import React from 'react'
import './projects.css'
import lms from '../../assets/lms.jfif'

function Projects() {
  return (
    <>
        <section id="projects" className="project container">
            <h2> <small>
                Previous
            </small>Completed Projects</h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <a href="https://github.com/blaqueDeveloper/phase3Project"><img src={lms} alt="Workplace -1" width="100%" /></a>
                            <figcaption>Library Management System</figcaption>
                        </div>
                    </figure>
                    <h3>Library Management System</h3>
                    <p>Simple CLI Library Management Sytem</p>
                </article>

                <article>
                    <figure>
                        <div>
                            <a href="https://leafy-tapioca-ff9411.netlify.app/"><img src={lms} alt="Workplace -1" width="100%" /></a>
                            <figcaption>Recipe Website</figcaption>
                        </div>
                    </figure>
                    <h3>Tasty Recipes</h3>
                    <p>Search for meals based on ingredients</p>
                </article>
            
            </div>

        </section>
    </>
  )
}

export default Projects