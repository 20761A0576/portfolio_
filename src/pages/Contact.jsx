import React, { useState } from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Name is required";
        tempErrors.email = formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid") : "Email is required";
        tempErrors.subject = formData.subject ? "" : "Subject is required";
        tempErrors.message = formData.message ? "" : "Message is required";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === ""); // Returns true if no errors
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        // Simulate a successful submission (replace with your actual submission logic)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

            setSuccessMessage('Thank you for your message! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            setErrors({}); // Clear any previous errors

            // Automatically clear success message after a few seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);

        } catch (error) {
            console.error('Form submission error:', error);
            setErrors({ submit: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-content">
                <div className="contact-header">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Have questions, ideas, or just want to connect? Feel free to reach out!
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
                            <p>sairamdanda123@gmail.com</p>
                        </div>
                        <div className="info-card">
                            <h3><FontAwesomeIcon icon={faPhone} /> Phone</h3>
                            <p>+91 9392873662</p>
                        </div>
                        <div className="info-card">
                            <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h3>
                            <p>Markapur, India</p>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/20761A0576" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/dandaramireddy" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://twitter.com/DandaRam3649" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        {successMessage && (
                            <div className="success-message">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                {successMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`form-input ${errors.name ? 'error' : ''}`}
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="error-message"><FontAwesomeIcon icon={faExclamationCircle} />{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`form-input ${errors.email ? 'error' : ''}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="error-message"><FontAwesomeIcon icon={faExclamationCircle} />{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={`form-input ${errors.subject ? 'error' : ''}`}
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject of your message"
                                />
                                {errors.subject && <p className="error-message"><FontAwesomeIcon icon={faExclamationCircle} />{errors.subject}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                ></textarea>
                                {errors.message && <p className="error-message"><FontAwesomeIcon icon={faExclamationCircle} />{errors.message}</p>}
                            </div>

                            <button type="submit" className="submit-button" disabled={Object.keys(errors).length > 0}>
                                Send Message <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                            {errors.submit && <p className="error-message"><FontAwesomeIcon icon={faExclamationCircle} />{errors.submit}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;