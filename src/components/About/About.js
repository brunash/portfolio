import React from "react";
import "./About.scss";
import { imageItems } from "../../constants/Constants";
import TechStack from "../TechStack/TechStack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

let iconStyles = {
  fontSize: "50px",
};




const About = () => {

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
    
    <main main className = "container"
    // onMouseEnter = {
    //   textEnter
    // }
    // onMouseLeave = {
    //   textLeave} 
      >
      <motion.div
      className = 'cursor'
      variants = {
        variants
      }
      animate = {
        cursorVariant
      }
      />
      <div div className = "container__information">
        <section className = "container__about"
        onMouseEnter = {
          textEnter
        }
        onMouseLeave = {
          textLeave
        } 
        >
          <p>Hello, my name is</p>
          <h1 >Slobodan Zaja</h1>
          <h2>I 'm a Software Developer</h2>
          
          <h3>I'm a Full Stack Web Developer</h3>
        </section>
        <div div className = "container__logos"
        onMouseEnter = {
          textEnter
        }
        onMouseLeave = {
          textLeave
        } 
        >
          <a a href="https://www.linkedin.com/in/slobodanzaja">
            {" "}
            <LinkedInIcon className="social" style={iconStyles} />
          </a>
          <a href="https://www.github.com/brunash">
            <GitHubIcon className="social" style={iconStyles} />
          </a>
        </div>
      </div>
      <TechStack />
     
    </main>
  );
};

export default About;
