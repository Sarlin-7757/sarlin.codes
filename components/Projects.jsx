import React from 'react'
import Styles from "./Projects.module.css"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
        <div id={Styles.projectCard}>
          <h3 id="projectComp"className={Styles.projCompHead}>Projects</h3>

            <ProjectCard />
        </div>
        
  )
}

export default Projects