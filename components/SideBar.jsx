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
            <li id={Styles.list_items} >&gt;<a href='#'> Introduction/</a></li>            
            <li id={Styles.list_items} onClick={toggleSkill}>&gt; Skills/</li>
            {isSkilOpen && (
              <ul className='submenuSkill'  style={{marginTop:"5px"}}>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}><a href='#frontEndComp'>- Frontend</a></li>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}><a href='#backendComp'>- Backend</a></li>
              </ul>
            )}
            <li id={Styles.list_items} onClick={toggleProjects}>&gt; <a href='#projectComp'> Projects/</a></li>            
            {/* {isProjectOpen &&(
            <ul className='submenu' style={{marginTop:"5px"}}>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}>- Face Detection</li> 
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}>- Geneomics </li>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}>- Todo List</li>
                <li style={{position:"relative" , left:"40px" , fontSize:"14px" , cursor:"pointer" , marginTop:"4px"}}>- Weather API</li>
            </ul> 
            )} */}
        </ul>
    </div>
  )
}

export default SideBar;