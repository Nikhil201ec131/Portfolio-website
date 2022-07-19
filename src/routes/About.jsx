import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Aboutme from '../Components/Aboutme'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg heading="ABOUT" text="I'm a frontend devloper"/>
      <Aboutme/>
      <Footer/>
    </div>
    
  );
}

export default About;
