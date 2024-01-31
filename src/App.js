import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./Routes/Home.js";
import About from  "./Routes/About.js";
import Projects from "./Routes/Projects";
import Contact from  "./Routes/Contact.js";
import Skills from "./Routes/Skills.js";

function App() {
  return ( 
    <>                           
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </>                                                   
  );
}
export default App; 







