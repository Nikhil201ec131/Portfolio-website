import"./Expostylesheet.css";
import React from 'react';
import {NavLink} from 'react-router-dom'
import pro from '../assets/pro.png'
const Expo = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image"/>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>
            {props.text}
        </p>
        <div className="pro-btns">
         <NavLink to={props.view} className="bttn">view</NavLink>
         <NavLink to={props.source} className="bttn">source</NavLink>
        </div>
      </div>
     </div>
  );
}

export default Expo;
