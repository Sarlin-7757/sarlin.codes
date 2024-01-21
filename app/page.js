import React from "react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent"; 
import SkillsComponent from "@/components/SkillsComponent";
import Projects from "@/components/Projects";
import Styles from './pagestyle.module.css'
const App = ()=>{
    
  return (

    <main> 
      <Header />
      <div className="flex" id={Styles.mainupperdiv}>
          <SideBar /> 
          < MainContent />                    
      </div>
      <SkillsComponent />
      <Projects />
    </main>
  )
}

export default App;