import React from 'react'
import Styles from "./MainContent.module.css"
const MainContent = () => {
  return (
    
    <div id={Styles.main_content} className='font-mono'>
     <h3>Introduction</h3>
        <div id={Styles.maincontent_heading_container} className='intro_sec'>
            <h1 id={Styles.main_content_heading}>Hi! I am Saransh</h1> 
        </div>
        <div id={Styles.main_content_bio}>
            <p id={Styles.main_content_paragraph} className='mt-10 text-lg'>-- I am currently a Computer Science Engineering Undergraduate.
            <br />-- Ask me about Development and Software Engineering.
            <br />-- I try to come up with ways to help others and this community.
            <br />-- I love writing and I also love dogs.
            <br />
            </p>
        </div>
    </div>

  )
}

export default MainContent