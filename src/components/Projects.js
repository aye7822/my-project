import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Take a look at our projects</h2>
            <div className="project-list">
                {/* Featured Project */}
                <div className="project-item featured">
                    <div className="project-tags">
                        <span className="tag">Featured</span>
                        <span className="tag">Website</span>
                    </div>
                    <h3>Roboto Landing Page</h3>
                    <button className="view-project">View project →</button>
                </div>
                
                {/* Other Projects */}
                <div className="project-item">
                    <div className="project-tags">
                        <span className="tag">UI/UX</span>
                        <span className="tag">Redesign</span>
                    </div>
                    <h3>Poppin App Design</h3>
                </div>
                <div className="project-item">
                    <div className="project-tags">
                        <span className="tag">Development</span>
                        <span className="tag">UI/UX</span>
                        <span className="tag">Redesign</span>
                    </div>
                    <h3>Groteck Website</h3>
                </div>
                <div className="project-item">
                    <div className="project-tags">
                        <span className="tag">Branding</span>
                        <span className="tag">UI/UX</span>
                    </div>
                    <h3>Helvatica Branding</h3>
                </div>
            </div>
        </section>
    );
};

export default Projects;
