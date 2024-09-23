import React from 'react';
import './AboutSection.css'; // Import the CSS file
import logoImage from '../assets/wefo-studio-logo.png';

const AboutSection = () => {
  return (
    <section className="about">
      <h2>Who are we?</h2>
      <p>We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more exposure.</p>
      <button className="learn-more-button">Learn more</button>
      <div className="wefo-studio-logos">
      <img className="wefo-studio-logo" src={logoImage} alt="WEFO Studio Logo" />
       </div>
    </section>
  );
};

export default AboutSection;