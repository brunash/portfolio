import React from "react";
import './About.scss'
import { imageItems } from '../../constants/Constants';
import TechStack from "../TechStack/TechStack";

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
            <TechStack></TechStack>
        </div>
    )
}

export default About;

