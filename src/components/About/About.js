import React from "react";
import "./About.scss";
import { imageItems } from "../../constants/Constants";
import TechStack from "../TechStack/TechStack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

let iconStyles = {
  fontSize: "50px",
};

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 5,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 16,
      backgroundColor: "yellow",
    },
    text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "pink",
      mixBlendMode: "overlay",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <main
      main
      className="container"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div div className="container__information">
        <section
          className="container__about"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <p>Hello, my name is</p>

          <div className="container__name">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "S",
                "L",
                "O",
                "B",
                "O",
                "D",
                "A",
                "N",
                " ",
                "Z",
                "A",
                "J",
                "A"
              ]}
              idx={15}
            />
          </div>
          <h2>I 'm a Software Developer</h2>

          <h3>I'm a Full Stack Web Developer</h3>
        </section>
        <div
          className="container__logos"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
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
