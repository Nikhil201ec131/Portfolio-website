import "./Frontstyles.css";
import React from 'react';
import Introimg from "../assets/bg.jpg"
import  {Link} from "react-router-dom"
const Front = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img  className="intro-img"src={Introimg} alt="image"/>
      </div>
      <div className="content">
        <p>HI,I'M A WEB-DEVELOPER</p>
        <h1>MADHUNALA NIKHIL</h1>
        <div>
            <Link to="/Project" className='btn'>Projects</Link>
            <Link to="/Contact" className='btn btn-light'>Contact Me</Link>
        </div>
      </div>
      </div>
    
  );
}

export default Front;
