import React from 'react';
import '../index.css';

const About = () => {
  return (
    <div id="about" className="about-section py-5">
      <div className="container text-white">
        <h1 className="text-center mb-5 about-heading">About Me</h1>
        <div className="row align-items-center">
          
         
          <div className="col-md-6 mb-4 mb-md-0 text-center">
           
            <img 
              src="aboutme.png" 
              alt="Myself" 
              className="img-fluid rounded"
              style={{ maxWidth: '80%', borderRadius: '12px' }}
            />
          </div>

     
          <div className="col-md-6">
            <p>
            I'm a passionate React Developer dedicated to building dynamic, responsive, and user-friendly web applications.
I focus on writing clean, maintainable code and continuously learning modern front-end tools like React, Bootstrap, and APIs.
While I’m early in my journey, I've already built several real-world projects and I’m excited to contribute to impactful products and grow as a developer.
            </p>
            

            <a  href="/MEGAN-RESUME.pdf" download className="download-resume-btn mt-4">
  Download Resume
</a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
