import React from "react";
import './About.scss'
import { imageItems } from '../../constants/Constants';
import TechStack from "../TechStack/TechStack";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="container">
            Hello, my name is
            <h1>
                Slobodan Zaja
            </h1>
            <h2>
                I 'm a Software Developer
            </h2>
            <h3>
                I'm a Full Stack Web Developer
            </h3>
            <div>
                <a href='https://www.linkedin.com/in/slobodanzaja'><LinkedInIcon className="social"/></a>
                <a href='https://www.github.com/brunash'><GitHubIcon className="social"/></a>
            </div>
            <TechStack/>
        </div>
    )
}

export default About;

