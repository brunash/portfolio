import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import { TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



const Contact= () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bl1wgap', 'template_9b87k9p', form.current, '_H2ELp_8grAZ3Dl41')

      alert('Email sent!');
        
      e.target.reset();
    };

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
        <section className="contact">
            <div className='contact__title--container'>
            <h3 className='contact__title'>Send me a message</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <TextField 
                required 
                type='text' 
                name='name' 
                autoComplete="off"
                label='Name'
                sx={{
                '& > :not(style)': { m: 1 },
                // color: 'white',
                input: {
                    color: 'white'
                }
                }}
            
                />
                <TextField 
                required 
                type='email' 
                name='email' 
                autoComplete="off"
                label='Email'
                sx={{
                '& > :not(style)': { m: 1 },
                color: 'black',
                input: {
                    color: 'white',
                    background: 'inherit'
                }
                }}
                />
               
                <TextField 
                multiline 
                required 
                type='text'
                autoComplete="off"
                sx={{
                '& > :not(style)': { m: 1 },
                color: 'primary',
                input: {
                    color: 'white',
                }
                }}
                rows={4} name='message' placeholder='Type your message here'/>
                {/* <button className='button' type='submit'>Send Message</button> */}
                <div className='button__container'>
                <Button className='button'></Button>
                </div>
            </form>
        </section>
    )
}

export default Contact;