import React from 'react'
import Styles from './SideBar.module.css'
// import Link from 'next/link'


const SideBar = () => {
  return (
    <div className={Styles.sidebar_prop}>
        <ul className='pt-5 ml-5 font-mono text-lg w-full'>
            <li id={Styles.list_items}>- Introduction</li>            
            <li id={Styles.list_items}>- Skills</li>
            <li id={Styles.list_items}>- Projects</li>            
        </ul>
    </div>
  )
}

export default SideBar;