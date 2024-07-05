import React from 'react'
import Image from 'next/image'
import Styles from "./SkillComponent.module.css"
const SkillsComponent = () => {

  return (
     
      <div className='' id={Styles.skill_Div}>
          <h3 className={Styles.skillCompHead} >Skills</h3> 
      <div className={Styles.frontendSkillDiv}>
        <h2 id="frontEndComp"className={Styles.skillName} style={{ fontSize: "30px"}}>Frontend Frameworks.</h2>
        <div>
          <Image
            id={Styles.iconImage}
            src="/assets/icons/reacticon.svg"
            alt='React-icon'
            width={40}
            height={40}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>React.JS</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            style={{ filter: "invert(100%)", top: "4.5rem" }}
            src="/assets/icons/next.svg"
            alt='Next.js icon'
            width={70}
            height={70}
          />

          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Next.JS</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            src="/assets/icons/mongoDB.png"
            alt='MongoDb icon'
            width={40}
            height={40}
           /> 
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>MongoDB</h3>
          <div id={Styles.line}></div>

          <Image 
            id={Styles.iconImage}
            style={{right:"15px"}}
            src="/assets/icons/tailwind-css.svg"
            alt='Tailwind icon'
            width={40}
            height={40}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Tailwind</h3>
          {/* <div id={Styles.line}></div>  */}
        </div>
      </div >

      <div id="backendComp"className={Styles.backendSkillDiv}>
        <h2 className={Styles.skillName} style={{fontSize:"30px"}}>Backend Frameworks.</h2>
        <div>
          <Image
            id={Styles.iconImage}
            src="/assets/icons/nodejs.svg"
            alt='Node icon'
            width={50}
            height={50}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Node.Js</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            style={{ filter: "invert(100%)", top: "5.5rem" }}
            src="/assets/icons/express.svg"
            alt='Express icon'
            width={40}
            height={40}
          />

          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Express</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            src="/assets/icons/python.svg"
            alt='Python icon'
            width={40}
            height={40}
           /> 
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Python</h3>
          <div id={Styles.line}></div>
          <Image 
            id={Styles.iconImage}
            style={{right:"15px" , "top":"2rem" }}
            src="/assets/icons/go.svg"
            alt='Golang icon'
            width={40}
            height={40}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", fontSize: "20px" }}>GoLang</h3>
        </div>
      </div>
    </div>


      )
}

export default SkillsComponent