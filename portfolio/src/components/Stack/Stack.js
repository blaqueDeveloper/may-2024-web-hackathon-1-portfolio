import React from 'react'
import './stack.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'
import vscode from '../../assets/vscode.png'

function Stack() {
  return (
    <>
        <section className=" logos container">
            <div className="marquee">
                <div className="track">
                    <img src={html} alt="Html" width="128" />
                    <img src={css} alt="CSS" width="128" />
                    <img src={javascript} alt="JS" width="128"/>
                    <img src={react} alt="React" width="128"/>
                    <img src={python} alt="Python" width="128"/>
                    <img src={vscode} alt="Vs Code" width="128"/>
                    <img src={html} alt="Html" width="128"/>
                    <img src={css} alt="CSS" width="128"/>
                    <img src={javascript} alt="JS" width="128"/>
                    <img src={react} alt="React" width="128"/>
                    <img src={python} alt="Python" width="128"/>
                    <img src={vscode} alt="Vs Code" width="128"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Stack