import "./Aboutmestyle.css"
import React from 'react';
import {Link} from 'react-router-dom'
import myimg from '../assets/myimg.jpeg'
import myimg2 from '../assets/p2.jpg'

const Aboutme = () => {
  return (
    <div className="about">
      <div className="left">
       <h1>Who Am I?</h1>
       <p>
        Im a react front-end devloper
       </p>
       <Link to="/Contact">
        <button className="btn">Contact</button>
       </Link>
      </div>
      <div className="right">
       <div className="img-container">
        <div className="img-stack top">
          <img src={myimg} className="img" alt="myimage"/>
          <img src={myimg2} className="img-2" alt="myimage"/>

        </div>

       </div>
      </div>
    </div>
  );
}

export default Aboutme;
