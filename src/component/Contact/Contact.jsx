import React , {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text"className="name" placeholder="Your Name" />
          <input type="email" className="email"  placeholder="Your Email"/>
          <textarea  className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
           <button  type='submit' className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
