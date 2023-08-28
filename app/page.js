import React from "react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent"; 
import SkillsComponent from "@/components/SkillsComponent";

const App = ()=>{
  return (

    <main> 
      <Header />
      <div className="flex">
          <SideBar /> 
          < MainContent />     
          {/* <SkillsComponent /> */}
      </div>
    </main>
  )
}

export default App;