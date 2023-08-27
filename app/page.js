import React from "react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent"; 

const App = ()=>{
  return (

    <main> 
      <Header />
      <div className="flex">
          <SideBar /> 
          < MainContent /> 
      </div>
    </main>
  )
}

export default App;