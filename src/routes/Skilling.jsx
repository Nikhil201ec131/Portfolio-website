import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Skills from '../Components/Skills';
import Heroimg from '../Components/Heroimg';


const Skilling = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg heading="Skills" text="......"/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default Skilling;


