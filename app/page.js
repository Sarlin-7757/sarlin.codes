import React from "react";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent"; 
import SkillsComponent from "@/components/SkillsComponent";
import Projects from "@/components/Projects";
import Styles from './pagestyle.module.css'
import Footer from "@/components/Footer";
const App = ()=>{
    
  return (

    <main> 
      <Header />
      <div className="flex" id={Styles.mainupperdiv}>
          < MainContent />                    
      </div>
      <SkillsComponent />
      <Projects />
      <Footer />
    </main>
  )
}

export default App;