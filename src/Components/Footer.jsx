import "./Footstyle.css"
import React from 'react';
import {FaHome,FaPhone,FaMailBulk,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       <div className="left">
         <div className="location">
            <h4>  <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}} /> </h4>
         
            <div>
            <h4>NITK Surathkal, Karnataka</h4>
            <h4>Hostel:MT2 ,Room No: A218</h4>
                
         </div>
         </div>
        
         <div className="phone">
            <h4> <FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}} /> 
            +918522994642</h4>
            
         </div>

         <div className="email">
            <h4> <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}} /> 
            
            madhunalanikhil457@gmail.com</h4>
             
        

         </div>
         
       </div>
       <div className="right">
         <p>This is me Madhunala Nikhil a development enthusiast , I enjoy discussing new projects and design challenges.</p>
         <div className="social">
       <h4> <a href="https://github.com/Nikhil201ec131">
       <FaGithub size={20} style={{color:"#fff" , marginRight:"2rem"}} /> 
        </a>
        <a href="https://github.com/Nikhil201ec131">
       <FaLinkedin size={20} style={{color:"#fff" , marginRight:"2rem"}} /> 
        </a>
        <a href="https://github.com/Nikhil201ec131">
       <FaTwitter size={20} style={{color:"#fff" , marginRight:"2rem"}} /> 
        </a></h4>.
       </div>
       </div>
      
      </div>
    </div>
  );
}

export default Footer;
