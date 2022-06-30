import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from '../Button/Button'
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';


const Contact = () => {
    const form = useRef();

    const theme = createTheme({
      status: {
        danger: "#e53e3e",
      },
      palette: {
        primary: {
          main: "#a594f9ff",
          darker: "#242038ff",
        },
        neutral: {
          main: "#64748B",
          contrastText: "#fff",
        },
      },
    });


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bl1wgap', 'template_9b87k9p', form.current, '_H2ELp_8grAZ3Dl41')

      alert('Email sent!');
        
      e.target.reset();
    };


    return (
      <section className="contact">
        <div className="contact__title--container">
          <h3 className="contact__title">Send me a message</h3>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <ThemeProvider theme={theme}>
            <TextField
              className="contact__input"
              required
              type="text"
              name="name"
              autoComplete="off"
              label="Your name"
              sx={{
                "& > :not(style)": { m: 1 },
                input: {
                  color: "primary",
                },
              }}
            />
            <TextField
              required
              className="contact__input"
              type="email"
              name="email"
              autoComplete="off"
              label="Your e-mail"
              sx={{
                "& > :not(style)": { m: 1 },
                color: "primary",
                input: {
                  color: "primary",
                  background: "neutral",
                },
              }}
            />

            <TextField
              multiline
              required
              className="contact__input"
              type="text"
              autoComplete="off"
              sx={{
                "& > :not(style)": { m: 1 },
                color: "primary",
                input: {
                  color: "white",
                },
              }}
              rows={4}
              name="message"
              placeholder="Type your message here"
            />
          </ThemeProvider>
          <div className="button__container">
            <Button className="button"></Button>
          </div>
        </form>
      </section>
    );
}

export default Contact;