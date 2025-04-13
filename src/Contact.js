import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section py-5" style={{ backgroundColor: '#11001C' }}>
      <div className="container py-5  px-4 text-center text-white">
        <h1 style={{ color: 'rgb(167, 139, 250)' }}>Get In Touch</h1>
        <p className="mt-3" style={{ color: 'white' }}>
          Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=megankanaujemagar@gmail.com"
          className="contact-btn mt-4"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
