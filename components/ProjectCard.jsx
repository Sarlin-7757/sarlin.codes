import React from "react";
import myProject from "@/data/projects";

import Styles from "./ProjectCard.module.css"

const ProjectCard = () =>{
    
     const projects = myProject.map((project)=> (
            <div  key={project.id} className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id={Styles.projcardComp}>
            <a href={project.link} target="blank">
                <img className="rounded-t-lg object-fit" src={project.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 style={{"color":"rgb(193, 202, 224"}} className="mb-2 text-2xl font-bold tracking-tight ">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.about}</p>
                <a href={project.link} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Github Link
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        
    ));
        const rows = [];
        for(let i = 0 ; i < projects.length ; i+=2){
            rows.push(
                <div key={i} className="flex mb-9" id={Styles.cardStyles}>
                    <div id={Styles.innerCardProp_u}  className="mr-8 ml-8">{projects[i]}</div>
                    <div id={Styles.innerCardProp_l} className="mr-8 ml-8">{projects[i+1]}</div>
                </div>
            )
        }
    return <>{rows}</>
      
}

export default ProjectCard;