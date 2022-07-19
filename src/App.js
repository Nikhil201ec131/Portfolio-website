import React from "react";
import ReactDom from "react-dom";
import {About,Home,Contact,Project,Skilling} from "./routes"
import './index.css';
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Skilling" element={<Skilling/>}/>
    </Routes>
    </>
  );
}

export default App;
