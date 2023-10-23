import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Contact from './pages/Contact/index';
import Projects from './pages/Projects/index';
import About from "./pages/About/index";
import 'tailwindcss/tailwind.css';

import './App.css'


function App() {
  return (
   <>
     <Router>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  
   
    </Router>
   
    </>
  
 
  );
}

export default App;
