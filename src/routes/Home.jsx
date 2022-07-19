import React from 'react';
import Navbar from '../Components/Navbar';
import Front from '../Components/Front';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';
import Work from '../Components/Work'
import Aboutme from '../Components/Aboutme'
import Form from '../Components/Form';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Front/>
      <Skills/>
      <Aboutme/>
      <Work/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Home;

