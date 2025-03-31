import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <Link to="/" className="logo">
                    <FontAwesomeIcon icon={faCode} />
                    Portfolio
                </Link>

                <button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Mobile Menu"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/experience"
                            className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;