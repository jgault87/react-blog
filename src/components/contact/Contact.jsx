import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import {validateEmail} from '../../utils/helpers';
import SpringAnimation from '../Springin';

import emailjs from 'emailjs-com';




const Contact = () => {
  const form = useRef();

 

  const[errorMessage, setErrorMessage] = useState("");

  
  

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
  };


  // emailjs function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w8ts37z',
        'template_7ya7eoe',
        form.current,
        '00VMVm7_RsV8h5lA0'
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage('Email Sent!');
          setTimeout(() => {setErrorMessage('')}, 3000);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('An error occurred, email was not sent');
         
        }
      );
    e.target.reset();
  };
  // end emailjs function need to wrap in .env

  return (
    <SpringAnimation>
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jgault87@gmail.com</h5>
            <a
              href='mailto:jgault87@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>JJ Gault</h5>
            <a
              href='https://m.me/robotixanonymous'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            onBlur={handleChange}
            required
          />
          <input
           type='email' 
           name='email' 
           placeholder='Your Email'          
           onBlur={handleChange}
           required />
          <textarea 
           name='message' 
           rows='7'        
           onBlur={handleChange}
           placeholder='Your Message'
           required />
            
          
          {errorMessage && (
          <div>
            <p >{errorMessage}</p>
          </div>
        )}
          
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
    </SpringAnimation>
  );
};

export default Contact;
