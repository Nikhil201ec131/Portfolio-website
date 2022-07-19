import"./Expostylesheet.css";
import React from 'react';
import {NavLink} from 'react-router-dom'
import pro from '../assets/pro.png'
import Expo from './Expo';
import Workdata from './Workdata';
const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">
        Projects
    </h1>
    <div className="project-container">
     {Workdata.map((val,ind)=>{
        return(
            <Expo 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            view={val.view}
            source={val.source}
            text={val.text}
            />
        )
     })}
    </div>
    </div>
  );
}

export default Work;

