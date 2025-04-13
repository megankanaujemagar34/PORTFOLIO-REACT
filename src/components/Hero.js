import React from 'react';
import '../index.css';  

const Hero = () => {
  return (
    <div className="hero-container">
     <b> <h1 className="hero-title">Megan Kanauje Magar</h1></b>
      <p className="hero-description">
      <b> ReactJs Developer and Frontend Engineer</b>
        <br />
        "Building modern, responsive applications using React.js to turn ideas into interactive digital solutions."
      </p>

      <div className="button-container">
       <a href="#projects"> <button className="view-projects-btn mx-3">View Projects</button></a>
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=megankanaujemagar@gmail.com"><button className="contact-me-btn">Contact Me</button></a>
      </div>
    </div>
  );
};

export default Hero;
