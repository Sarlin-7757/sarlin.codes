import React from 'react'
import Styles from "./MainContent.module.css"
import Image from 'next/image'


const MainContent = () => {
  return (
    
    <div id={Styles.main_content} className='font-mono'>
     <h3 style={{width:"115px"}}>Introduction</h3>
        <div id={Styles.maincontent_heading_container}>
            <h1 id={Styles.main_content_heading}>Hi! I am Saransh</h1> 
        </div>
        <div id={Styles.main_content_bio}>
            <p id={Styles.main_content_paragraph} className='mt-10 text-lg'>📖 I am currently a Computer Science Engineering Undergraduate.
            <br />❔ Ask me about Development and Software Engineering.
            <br />🤔 I try to come up with ways to help others and this community.
            <br />🐶 I love writing and I also love dogs.
            <br />
            </p>
         
        </div>

        <div id={Styles.main_content_bioImage}>
             {/* This is my image */}
             <Image src="/assets/images/pfp.jpeg " id={Styles.profileImage}  width={370} height={370}/>
        </div>
    </div>

  )
}

export default MainContent