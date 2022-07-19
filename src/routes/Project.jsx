import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Work from '../Components/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg heading="PROJECTS" text="Some of my most recent projects"/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default Project;
