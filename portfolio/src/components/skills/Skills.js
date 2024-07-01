import React from 'react'
import './skills.css'
function Skills() {
  return (
    <>
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>

            <div className="holder-blue">
                <div className="left-column">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>

                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>Node JS</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>As a dedicated and ambitious software developer with a strong foundation in software development methodologies, I'm passionate about creating efficient and innovative solutions through code.</p>
                    <p>In addition to my technical proficiency, I possess strong problem-solving abilities and excellent communication skills, essential for navigating complex projects and fostering effective teamwork</p>
                </div>
            </div>


        </section>
    </>
  )
}

export default Skills