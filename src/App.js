import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from "./pages/About";
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
