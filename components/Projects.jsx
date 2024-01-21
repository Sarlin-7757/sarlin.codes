import React from 'react'
import Styles from "./Projects.module.css"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id={Styles.projectSection} className='font-mono'>
        {/* <h1>Projects</h1> */}
        <h3 className={Styles.projCompHead}>Projects</h3>
        <div id={Styles.projectCard}>
            <ProjectCard />
        </div>
        
    </section>
  )
}

export default Projects