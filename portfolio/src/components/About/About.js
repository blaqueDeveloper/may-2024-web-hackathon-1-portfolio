import React from 'react'
import './about.css'
// import pic from '../../assets/IMG-20220818-WA0005.jpg'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

function About() {
  return (
    <>
        <section className="about container">
        <div className="about-blue">
            <div>
                <h1><small>Hi, I'm</small> Dorine</h1>
                <p>As a dedicated software development student, I am <span>committed to mastering coding skills and applying innovative solutions. My passion for technology drives me to excel in programming languages, software engineering principles, and collaborative projects. With hands-on experience and a keen interest in problem-solving, I strive to contribute to impactful software development projects. Eager to learn and grow, I am ready to take on new challenges in the dynamic field of software development.</span></p>
                
                <div className="call-to-action">
                    <a href="https://docs.google.com/document/d/1a0V3-uENA5Io_i3i_r7i1sDQC0SJrVRI/edit?usp=drive_link&ouid=105668858224228746362&rtpof=true&sd=true" className="button black">
                        View Resume
                    </a>
                    <a href="mailto:blaque.develop@gmail.com" className="button white">
                        Contact Me
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/blaqueDeveloper"><img src={github} alt="Github" width="48px" /> </a>
                    <a href="https://www.linkedin.com/in/wanjiku-manyara-7211082bb/"><img src={linkedin} alt="Linkedin" width="48px" /> </a>
                </div>
            </div>
        </div>
        {/* <div className="about-yellow">
            <img src={pic} alt="My-Pic" width="100%" />
        </div> */}
    </section>
</>

  )
}

export default About