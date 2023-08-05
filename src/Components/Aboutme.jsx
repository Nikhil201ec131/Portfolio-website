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
     
        <h3>React Front-End Developer</h3> 
         <section> <h2>Experience</h2> <h4>Ex-SDE Intern  @Standard Chartered GBS: </h4>
        <p>Worked on React, <entity>Nodejs</entity>, <entity>Java</entity>, SpringBoot, Maven.</p>
        <div> <h4>Q/A Expert  @Transtutors:</h4> <p>Assisted 40+ students in their assignments and projects.</p> </div> 
        </section> <section> <h2>Education</h2> <p>B.Tech in Electronics and Communication Engineering - NITK</p> </section>
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
