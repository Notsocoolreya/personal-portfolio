import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>Hospital Management Website</h3>
          <p>Responsive web interface for doctors, patients, and admins to manage appointments and reports.</p>
          <a href="https://github.com/Notsocoolreya/medsphere-hopsital" target="_blank">GitHub ↗</a>
        </div>

        <div className="project-card">
          <h3>to do list</h3>
          <p>just a beginner to do list </p>
          <a href="https://github.com/Notsocoolreya/TO-DO-list">Live Demo (Coming Soon)</a>
        </div>

        <div className="project-card">
          <h3>edit karo Portfolio</h3>
          <p>designed a edit karo portfolio.</p>
          <a href="https://github.com/Notsocoolreya/portfolio-page-for-Editkaro" target="_blank">Source Code ↗</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
