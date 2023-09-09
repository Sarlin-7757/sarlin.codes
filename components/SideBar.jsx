"use client"
import React, { useState } from 'react'
import Styles from './SideBar.module.css'
// import Link from 'next/link'


const SideBar = () => {
  const [isProjectOpen , setIsProjectsOpen] = useState(false);
  const [isSkilOpen , setIsSkillOpen] = useState(false);

  const toggleProjects = () =>{
    setIsProjectsOpen(!isProjectOpen);
    
  }
  const toggleSkill = ()=>{
    setIsSkillOpen(!isSkilOpen);
  }

  return (
    <div className={Styles.sidebar_prop}>
        <ul className='pt-5 ml-5 font-mono text-lg w-full'>
            <li id={Styles.list_items}>&gt; Introduction</li>            
            <li id={Styles.list_items} onClick={toggleSkill}>&gt; Skills</li>
            {isSkilOpen && (
              <ul className='submenuSkill'  style={{marginTop:"5px"}}>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px"}}>- Frontend</li>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px"}}>- Backend</li>
              </ul>
            )}
            <li id={Styles.list_items} onClick={toggleProjects}>&gt; Projects</li>            
            {isProjectOpen &&(
            <ul className='submenu' style={{marginTop:"5px"}}>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px"}}>- Project1</li> 
                <li style={{position:"relative" , left:"40px" , fontSize:"14px"}}>- Project2</li>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px"}}>- Project3</li>
            </ul> 
            )}
        </ul>
    </div>
  )
}

export default SideBar;