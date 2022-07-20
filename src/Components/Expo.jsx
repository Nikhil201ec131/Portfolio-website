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
         <Link to={props.view} className="bttn">view</Link>
         <Link to={props.source} className="bttn">source</Link>
        </div>
      </div>
     </div>
  );
}

export default Expo;
