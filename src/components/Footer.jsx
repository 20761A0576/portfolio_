import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHome,
    FaUser,
    FaCode,
    FaAddressCard,
    FaLaptopCode,
    FaMobileAlt,
    FaPalette,
    FaHandshake
} from 'react-icons/fa';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub as faGithubBrands,
    faLinkedin as faLinkedinBrands,
    faTwitter as faTwitterBrands,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope as faEnvelopeSolid,
    faPhone as faPhoneSolid,
    faMapMarkerAlt as faMapMarkerAltSolid,
    faHome as faHomeSolid,
    faUser as faUserSolid,
    faCode as faCodeSolid,
    faAddressCard as faAddressCardSolid,
    faLaptopCode as faLaptopCodeSolid,
    faMobileAlt as faMobileAltSolid,
    faPalette as faPaletteSolid,
    faHandshake as faHandshakeSolid
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* About Section */}
                    <div className="footer-about">
                        <h3>About Me</h3>
                        <p>
                            I am a passionate Full Stack Developer with expertise in creating modern web applications.
                            I specialize in building responsive, user-friendly websites using cutting-edge technologies.
                        </p>
                        <div className="footer-social">
                            <a href="https://github.com/20761A0576" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faGithubBrands} />
                            </a>
                            <a href="https://linkedin.com/in/dandaramireddy" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faLinkedinBrands} />
                            </a>
                            <a href="https://twitter.com/DandaRam4570" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faTwitterBrands} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faHomeSolid} /> Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <FontAwesomeIcon icon={faUserSolid} /> About
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <FontAwesomeIcon icon={faCodeSolid} /> Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <FontAwesomeIcon icon={faAddressCardSolid} /> Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="footer-services">
                        <h3>Services</h3>
                        <ul>
                            <li>
                                <a href="#web-development">
                                    <FontAwesomeIcon icon={faLaptopCodeSolid} /> Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#mobile-apps">
                                    <FontAwesomeIcon icon={faMobileAltSolid} /> Mobile Apps
                                </a>
                            </li>
                            <li>
                                <a href="#ui-design">
                                    <FontAwesomeIcon icon={faPaletteSolid} /> UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a href="#consulting">
                                    <FontAwesomeIcon icon={faHandshakeSolid} /> Consulting
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelopeSolid} />
                                <p>sairamdanda123@gmail.com</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhoneSolid} />
                                <p>+91 9392873662</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAltSolid} />
                                <p>Markapur, India</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Danda Rami Reddy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;