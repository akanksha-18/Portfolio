import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setMessage('Your message has been sent successfully!');
          setSending(false);
        },
        (error) => {
          setMessage('Oops! Something went wrong. Please try again later.');
          setSending(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="formGroup">
            <label htmlFor="name">Your Name<span className="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Your Email<span className="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Your Message<span className="required">*</span></label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submitBtn" disabled={sending}>
            {sending ? 'Sending...' : 'Submit'}
          </button>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
