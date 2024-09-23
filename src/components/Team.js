import React from 'react';
import './Team.css';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandThreads } from 'react-icons/tb'; // Threads icon

// Team component highlighting the main team members or leaders
const Team = () => {
    return (
        <section className="team">
            <div className="team-header">
                <h2>Our Leader</h2>
                <p>Each product is crafted with passion and dedication. Meet our leader!</p>
            </div>
            <div className="leader-list">
                <div className="leader-item highlighted">
                    <div className="leader-info">
                        <h3>Cody Fisher</h3>
                        <p>CEO Founder</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                            <TbBrandThreads size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
                <div className="leader-item">
                    <div className="leader-info">
                        <h3>Kristin Watson</h3>
                        <p>Manager</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                            <TbBrandThreads size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
                <div className="leader-item">
                    <div className="leader-info">
                        <h3>Leslie Alexander</h3>
                        <p>Design Leader</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                            <TbBrandThreads size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
