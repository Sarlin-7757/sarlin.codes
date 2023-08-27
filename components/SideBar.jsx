import React from 'react'
import Styles from './SideBar.module.css'


const SideBar = () => {
  return (
    <div className={Styles.sidebar_prop}>
        <ul className='pt-5 ml-5 font-mono text-lg w-full'>
            <a href=".intro_sec"><li id={Styles.list_items}>Introduction</li> </a>            
            <li id={Styles.list_items}>Projects</li>            
        </ul>
    </div>
  )
}

export default SideBar;