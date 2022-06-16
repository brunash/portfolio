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

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 5
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 16,
      backgroundColor: "yellow"
    },
    text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "pink",
      mixBlendMode: "overlay"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div 
    //  onMouseEnter = {
    //    textEnter
    //  }
    //  onMouseLeave = {
    //    textLeave
    //  } 
     >
      <BrowserRouter>
      <motion.div
      className = 'cursor'
      variants = {
        variants
      }
      animate = {
        cursorVariant
      }
      />
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
