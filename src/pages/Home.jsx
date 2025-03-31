import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Danda Rami Reddy</span>
            <span className="title">Full Stack Developer</span>
          </h1>
          <p className="hero-description">
            I create beautiful and functional web applications with modern technologies.
            Passionate about building user-friendly experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">View My Work</Link>
            <Link to="/contact" className="btn secondary">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={profile} alt="Danda Rami Reddy" />
          </div>
        </div>
      </section>

      <section className="featured-skills">
        <h2 className="section-title">Featured Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>Modern UI Development</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-node-js"></i>
            <h3>ASP.Net Core</h3>
            <p>Backend Development</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <h3>Databases</h3>
            <p>Data Management</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive</h3>
            <p>Mobile-First Design</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;