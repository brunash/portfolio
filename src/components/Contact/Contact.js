import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import { TextField, Typography } from '@mui/material';


const Contact= () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bl1wgap', 'template_9b87k9p', form.current, '_H2ELp_8grAZ3Dl41')

      alert('Email sent!');
        
      e.target.reset();
    };
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
                color: 'black',
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