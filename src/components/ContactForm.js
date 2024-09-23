import React, { useState } from 'react';
import './ContactForm.css';
import ieLogo from '../assets/ie.png'; // Import the logo image

// ContactForm component allowing users to send a message
const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!`);
    };

    return (
        <section className="contact">
            <h2>Feel free to connect with us!</h2>

            {/* Adding the logo below the heading */}
            <div className="logo-container">
                <img src={ieLogo} alt="IE Logo" className="ie-logo" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Send</button>
            </form>

            {/* Contact Information Section */}
            <div className="contact-info">
                <p>Contact information:</p>
                <ul>
                    <li>Phone: 0972 663 633</li>
                    <li>Email: hello@wefo.com</li>
                </ul>
            </div>
        </section>
    );
};

export default ContactForm;
