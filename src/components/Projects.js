import React from 'react';
import '../index.css'; // Assuming your custom styles are there

const Projects = () => {
  return (
    <div id="projects" className="projects-section py-5" style={{ backgroundColor: '#000' }}>
      <div className="container text-white">
        <h1 className="text-center mb-5" style={{ color: 'rgb(167, 139, 250)' }}>My Projects</h1>
        <div className="row g-4">

          {/* Project 1 */}
          <div className="col-md-6">
            <div className="card project-card h-100" style={{ backgroundColor: '#11001C', border: '2px solid rgb(167, 139, 250)', color: 'rgb(167, 139, 250)' }}>
              <img src="todo.png" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">To do list</h5>
                <p className="card-text">
                  a project where the concepts like : State Management,Event Handling,Conditional Rendering,list rendering,local storage
                </p>
                <div className="d-flex gap-3">
                <a href="https://megan-todo-list-cns3thyh0-megan-kanauje-magars-projects.vercel.app">  <button className=" view-btn">View Project</button></a>
                  <a href="https://github.com/megankanaujemagar34/todo-list"><button className=" code-btn">View Code</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6">
            <div className="card project-card h-100" style={{ backgroundColor: '#11001C', border: '2px solid rgb(167, 139, 250)', color: 'rgb(167, 139, 250)' }}>
              <img src="weather.png" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Weather app</h5>
                <p className="card-text">
                 A small project using open weather api to find out the weather details of different places
                </p>
                <div className="d-flex gap-3">
                <a href="https://weather-app-zkjk.vercel.app">  <button className=" view-btn">View Project</button></a>
                <a href="https://github.com/megankanaujemagar34/weather-app"><button className=" code-btn">View Code</button></a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/megankanaujemagar34?tab=overview&from=2025-04-01&to=2025-04-13"><button className=" code-btn">See other projects</button></a>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
