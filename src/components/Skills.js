import React from 'react';
import '../index.css'; // make sure this contains your global styles

const Skills = () => {
  return (
    <div id="skills" className="skills-section py-5">
      <div className="container text-white">
        <h1 className="text-center mb-5 skills-heading">Skills</h1>
        <div className="row g-4">
          {/* Skills Card */}
          <div className="col-md-4">
            <div className="card skill-card h-100" >
              <div className="card-body">
                <h5 className="card-title">Languages</h5>
                <ul>
                 
                  <li>JavaScript</li>
             
                  <li>HTML & CSS</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frameworks Card */}
          <div className="col-md-4">
            <div className="card skill-card h-100" >
              <div className="card-body">
                <h5 className="card-title">Frameworks</h5>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Django</li>
                
                </ul>
              </div>
            </div>
          </div>

          {/* Other Skills Card */}
          <div className="col-md-4">
            <div className="card skill-card h-100" >
              <div className="card-body">
                <h5 className="card-title">Other Skills</h5>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Firebase</li>
                  <li>REST APIs</li>
                  
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
