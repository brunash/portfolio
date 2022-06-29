import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from '../Button/Button'
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';



const Contact = () => {
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
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <TextField 
                className='contact__input'
                required 
                type='text' 
                name='name' 
                autoComplete="off"
                label='Name'
                sx={{
                '& > :not(style)': { m: 1 },
                input: {
                    color: 'white'
                }
                }}
            
                />
                <TextField 
                required
                className='contact__input' 
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
                className='contact__input'
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