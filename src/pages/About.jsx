import React from "react";
import SkillBadge from "../components/SkillBadge";
import './About.css';

function About() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "ASP.Net Core", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "C#", level: 75 },
    { name: "SQL", level: 85 },
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Get to know me better</p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">My Story</h2>
            <p className="about-description">
              I'm a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating beautiful, user-friendly applications. With several
              years of experience in the industry, I've worked on various projects ranging
              from small business websites to complex web applications.
            </p>
            <p className="about-description">
              My journey in web development started with a curiosity for creating things on
              the internet. Over the years, I've developed expertise in modern web technologies
              and best practices, always staying up-to-date with the latest trends and tools.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;