import './main.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './styles/_mixins.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';





function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' exact element={<About/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
