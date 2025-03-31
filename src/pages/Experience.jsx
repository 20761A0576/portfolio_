import React from "react";
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faBuilding, faCode } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    const experiences = [
        {
            title: "Full Stack Development Intern",
            company: "Cognifyz Technologies",
            period: "Feb 2025 - March 2025",
            description: "Served as a Full Stack Development Intern with exceptional dedication and coordination skills. Demonstrated strong communication abilities and attention to detail. Consistently approached new assignments with enthusiasm, showcasing passion for Full Stack Development.",
            technologies: ["Full Stack Development", "Web Development", "Team Collaboration"]
        },
        {
            title: "React.js Developer Intern",
            company: "Slash Mark and AICTE",
            period: "Jan 2025 - March 2025",
            description: "Developed interactive UI components using React.js and optimized for performance. Integrated REST APIs to fetch and display dynamic content, improving application efficiency. Collaborated with designers and backend developers to enhance user experience.",
            technologies: ["React.js", "REST APIs", "UI/UX", "Performance Optimization"]
        },
        {
            title: "Java Developer Intern",
            company: "Slash Mark and AICTE",
            period: "Jan 2024 - April 2024",
            description: "Designed and developed backend applications using Java and SpringBoot. Built RESTful APIs to enable seamless data communication. Enhanced application performance by optimizing database queries.",
            technologies: ["Java", "SpringBoot", "REST APIs", "Database Optimization"]
        },
        {
            title: "Audio Question Answering Intern",
            company: "Jio Platforms Ltd",
            period: "Dec 2022 - Feb 2023",
            description: "Developed an AI-powered model for answering audio-based queries. Implemented Natural Language Processing (NLP) techniques to enhance model accuracy. Optimized speech-to-text conversion for better user experience.",
            technologies: ["AI", "NLP", "Speech-to-Text", "Machine Learning"]
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="experience-content">
                <div className="experience-header">
                    <h2 className="experience-title">My Journey</h2>
                    <p className="experience-subtitle">A timeline of my professional experiences</p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div className="experience-item" key={index}>
                            <div className="experience-card">
                                <div className="experience-date">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    {exp.period}
                                </div>
                                <h3 className="experience-role">
                                    <FontAwesomeIcon icon={faBriefcase} /> {exp.title}
                                </h3>
                                <div className="experience-company">
                                    <FontAwesomeIcon icon={faBuilding} /> {exp.company}
                                </div>
                                <p className="experience-description">{exp.description}</p>
                                <div className="experience-skills">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span className="skill-tag" key={techIndex}>
                                            <FontAwesomeIcon icon={faCode} />
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;