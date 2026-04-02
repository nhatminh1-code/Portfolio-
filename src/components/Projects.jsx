import React from 'react';
import projectsData from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">LEARN MORE</h2>
        <p className="section-subtitle">
          Projects built with modern tech stack and AI-assisted 
          development workflow.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span>{project.image}</span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  <div className="tech-group">
                    <span className="tech-label">Tech:</span>
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="tech-group">
                    <span className="tech-label">AI Tools:</span>
                    {project.aiTools.map((t, i) => (
                      <span key={i} className="tech-tag ai-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    📂 GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    👍
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;