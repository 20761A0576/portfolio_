import React from "react";
import './ProjectCard.css';

function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-project">
            View Project
          </a>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
