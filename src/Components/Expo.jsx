import"./Expostylesheet.css";
import React from 'react';
import {Link} from 'react-router-dom'
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
         <a href={props.view} className="bttn">view</a>
         <a href={props.source} className="bttn">source</a>
        </div>
      </div>
     </div>
  );
}

export default Expo;
