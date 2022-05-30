import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';


const Contact= () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bl1wgap', 'template_9b87k9p', form.current, '_H2ELp_8grAZ3Dl41')

      alert('Email sent successfully');
        
      e.target.reset();
    };
    return (
        <section id="contact">
        <h1 className='contact__title'>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type='name' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
                <button className='button' type='submit'>Send Message</button>
            </form>
        </section>
    )
}

export default Contact;