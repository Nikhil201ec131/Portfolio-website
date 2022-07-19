import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Heroimg from '../Components/Heroimg';
import Form from '../Components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Contact;
