import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import vite from '../assets/vite-react.png'
import py from '../assets/python.png'
import sql from '../assets/sql.png'
import mongodb from '../assets/mongodb.png'
import github from '../assets/github.png'
import git from '../assets/git.png'
import node from '../assets/node.png'
import vscode from '../assets/vscode.png'

export const Skills = () => {
  return (
    <>
<div className="skill-container">
   <h1>My Skills</h1>
    <div className="skills">
    <h2>Front end</h2>
    <ul>
      <li><img src={html} alt="" /> HTML5</li>
      <li><img src={css} alt="" />CSS3</li>
      <li><img src={js} alt="" />JavaScript</li>
      <li><img src={react} alt="" />Reactjs</li>
      <li><img src={vite} alt="" />Vite+React</li>
      </ul>
      <h2>Backend</h2>
      <ul>
      <li><img src={node} alt="" />Nodejs</li>
      <li><img src={py} alt="" />Python</li>
      </ul>
      <h2>Database</h2>
       <ul>
      <li><img src={mongodb} alt="" />MongoDB</li>
      <li><img src={sql} alt="" />SQL</li>
      </ul>
     <h2>Tools</h2>
      <ul>
      <li><img src={github} alt="" />GitHub</li>
      <li><img src={git} alt="" />Git</li>
      <li><img src={vscode} alt="" />VsCode</li>
    </ul>
  </div></div>
  </>
  )
}
