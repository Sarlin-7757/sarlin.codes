import React from "react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent"; 
import SkillsComponent from "@/components/SkillsComponent";
import Projects from "@/components/Projects";
const App = ()=>{
  return (

    <main> 
      <Header />
      <div className="flex" style={{height:"600px" , marginTop:"100px"}}>
          <SideBar /> 
          < MainContent />                    
      </div>
      <SkillsComponent />
      <Projects />
    </main>
  )
}

export default App;