import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-text">
        If you'd like to reach out to me, you can email me at <a href="mailto:hasanvelic7@gmail.com" className="contact-link">hasanvelic7@gmail.com</a>, 
        or visit my <a href="https://github.com/itsHaso" className="contact-link" target="_blank" rel="noopener noreferrer">Github</a>.
      </p>
    </div>
  );
}

export default Contact;
