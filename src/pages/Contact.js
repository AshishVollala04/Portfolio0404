import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="animated-bg"></div>
      <h2 className="animated-title">Get in Touch</h2>
      <div className="contact-container">
        <p className="contact-description">
          Feel free to reach out to me for collaborations, queries, or just a friendly chat!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <a href="https://wa.me/8688016049" target="_blank" rel="noopener noreferrer">
              +91 8688016049
            </a>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <a href="mailto:ashishvollala0404@gmail.com">ashishvollala0404@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fa fa-linkedin"></i>
            <a href="https://in.linkedin.com/in/ashish-vollala-0910a31bb" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
