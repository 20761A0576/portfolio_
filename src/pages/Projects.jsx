import React from "react";
import ProjectCard from "../components/ProjectCard";
import './Projects.css';
import ecommerce from '../assets/ecommerce.jpg';
import insurance from '../assets/insurance.jpg';
import portfolio from '../assets/portfolio.png';
import weather from '../assets/weather.jpg';

function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
            technologies: ["HTML", "CSS", "JavaScript", "Core Java", "JSP", "JDBC", "Servlet", "MySQL"],
            image: ecommerce,
            link: "https://github.com/20761A0576/E-Commerce"
        },
        {
            title: "Insurance Provider Management System",
            description: "An insurance management system that handles policy creation, claims processing, premium calculations, and customer management with secure authentication.",
            technologies: ["React", "JavaScript", "C#", "ASP.Net Core", "SQL Server", "Entity Framework", "MVC", "Restful API", "Bootstrap"],
            image: insurance,
            link: "https://github.com/20761A0576/Insurance-Management-System"
        },
        {
            title: "Portfolio Website",
            description: "A modern portfolio website built with React and styled with CSS animations and transitions.",
            technologies: ["React", "CSS", "JavaScript", "React Router"],
            image: portfolio,
            link: "https://github.com/20761A0576/Portfolio"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard that displays current weather, forecasts, and interactive maps using weather API integration.",
            technologies: ["React", "OpenWeather API", "Chart.js", "Axios"],
            image: weather,
            link: "https://github.com/20761A0576/Weather-Dashboard"
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="projects-content">
                <div className="projects-header">
                    <h2 className="projects-title">My Projects</h2>
                    <p className="projects-subtitle">A collection of my recent work</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;