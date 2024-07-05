import React from 'react'
import Styles from "./MainContent.module.css"
import Image from 'next/image'


const MainContent = () => {
  return (
    
    <div id={Styles.main_content} className=''>
        <div className='maintaingFlexForMainContainer'>
        <h3 className={Styles.introductionStyles} style={{width:"115px"}}>Introduction</h3>
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
        </div>
        <div id={Styles.main_content_bioImage}>
             {/* This is my image */}
             <Image src="/assets/images/profilepic.png " alt="profilepic"id={Styles.profileImage}  width={380} height={380}/>
        </div>
    </div>
    
   ) 
}  
export default MainContent