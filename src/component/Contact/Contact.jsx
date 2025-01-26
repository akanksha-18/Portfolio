import React from 'react';
import './Contact.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Feel free to reach out to me through LinkedIn or email.
        </span>
        <div className="contactLinks">
          <a
            href="https://www.linkedin.com/in/akanksha-dubey-b66362201/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <FaLinkedin className="contactIcon" />
            LinkedIn
          </a>
          <a
            href="mailto:akankshadubey2558@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <FaEnvelope className="contactIcon" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
