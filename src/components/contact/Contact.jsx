import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bq4uhqo', 'template_2thr0om', form.current, 'K1xwdvNN3DF5ICgiR')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dendrive6@gmail.com</h5>
            <a href="mailto:dendrive6@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>dendrive</h5>
            <a href="https://m.me/den.drayv.5" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <GrInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>future_workplace</h5>
            <a href="https://www.instagram.com/future_workplace/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name= 'email'placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact