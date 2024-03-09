import React from 'react'
import Image from 'next/image'
import Styles from "./SkillComponent.module.css"
const SkillsComponent = () => {

  return (
    <section id="SkillsComp" className={Styles.skillCompSection}>
      <div className='font-mono' id={Styles.skill_Div}>
      <h3 className={Styles.skillCompHead} >Skills</h3>

      <div className={Styles.frontendSkillDiv}>
        <h2 id="frontEndComp"className={Styles.skillName} style={{ fontSize: "30px", marginLeft: "60px" }}>Frontend Frameworks.</h2>
        <div style={{ position: 'relative', left: "20px" }}>
          <Image
            id={Styles.iconImage}
            src="/assets/icons/reacticon.svg"
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
            width={70}
            height={70}
          />

          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Next.JS</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            src="/assets/icons/mongoDB.png"
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
            width={40}
            height={40}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Tailwind</h3>
          {/* <div id={Styles.line}></div>  */}
        </div>
      </div >

      <div id="backendComp"className={Styles.backendSkillDiv}>
        <h2 className={Styles.skillName} style={{fontSize:"30px" , marginLeft: "60px"}}>Backend Frameworks.</h2>
        <div style={{ position: 'relative', left: "20px" }}>
          <Image
            id={Styles.iconImage}
            src="/assets/icons/nodejs.svg"
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
            width={40}
            height={40}
          />

          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Express</h3>
          <div id={Styles.line}></div>

          <Image
            id={Styles.iconImage}
            src="/assets/icons/python.svg"
            width={40}
            height={40}
           /> 
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>Python</h3>
          <div id={Styles.line}></div>

          <Image 
            id={Styles.iconImage}
            style={{right:"15px" , filter:"invert(100%)" , bottom:"1rem"}}
            src="/assets/icons/api.png"
            width={40}
            height={40}
          />
          <span id={Styles.dot}></span>
          <h3 style={{ position: "relative", left: "85px", top: "35px", fontSize: "20px" }}>API's </h3>
          {/* <div id={Styles.line}></div>  */}
        </div>
      </div>
    </div>


    </section>
      )
}

export default SkillsComponent