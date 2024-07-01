import React from 'react'
import './experience.css'
import nakuru from '../../assets/nakuru.png'

function Experience() {
  return (
    <>
        <section className="experience container">
            <h2>
                <small>Recent</small>
                Work Experience            
            </h2>

            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <img src={nakuru} alt="Workplace -1" width="100%" />
                            <figcaption>Nakuru County Government</figcaption>
                        </div>
                    </figure>
                    <h3>Nakuru County Government</h3>
                    <div>June 2024 - August 2024</div>
                    <p>Intern at Nakuru County Government, Department of Education, ICT and e-Government</p>
                </article>
            
            </div>
        </section>
    </>
  )
}

export default Experience