import "./Navbarstyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import "../index.css"
import {FaBars,FaTimes} from "react-icons/fa"
import {useState} from "react";


const Navbar = () => {


   const [click,setclick]=useState(false);
   const handClick=()=>{
    setclick(!click);
   }
   
   const [color,setColor]=useState(false);
   const changeColor=()=>{
    if(window.scrollY>=2)
    {
        setColor(true);
    }else{
        setColor(false);
    }
   };

   window.addEventListener("scroll",changeColor);

  return (
    <div className={color?"header header-bg":"header"}>
       <Link to="/">
        <h2>M.N</h2>
        </Link>
        <ul className= {click? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Skilling">Skills</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>

     
        </ul>
        <div className="hamburger" onClick={handClick}>
                 {click? <FaTimes size={20} style={{color:"white"}}/>:<FaBars size={20} style={{color:"white"}}/> };
                
                 
            </div>
    </div>
  );
}

export default Navbar;
