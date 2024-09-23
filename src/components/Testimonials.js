import React from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for navigation
import authorImage from '../assets/avatar.png'; // Import the author image from assets

// Testimonials component displaying client feedback
const Testimonials = () => {
    return (
        <section className="testimonials">
           <div className="testimonial-content">
            <h2>Testimonials</h2>
                <p className="testimonial-quote">
                    "A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!"
                </p>
                <div className="testimonial-author">
                    <img src={authorImage} alt="Author" className="author-image" />
                    <div className="author-details">
                        <span className="author-name">Kathryn Murphy</span>
                        <span className="author-title">Senior Marketing, Spotify</span>
                    </div>
                </div>
                <div className="navigation-buttons">
                    <button className="nav-button">
                        <FaChevronLeft size={18} />
                    </button>
                    <button className="nav-button">
                        <FaChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
