import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>We are a close-knit team of experts dedicated to crafting memorable and emotionally engaging websites, digital experiences, and native apps.</p>
      <div className="service-list">
        <div className="service-item">
          <div className="service-icon">BRAND IDENTITY</div>
          <p>We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</p>
        </div>
        <div className="service-item">
          <div className="service-icon">UX/UI DESIGN</div>
          <p>We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</p>
        </div>
        <div className="service-item">
          <div className="service-icon">WEBFLOW DEVELOPER</div>
          <p>We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</p>
        </div>
      </div>
    </section>
  );
};

export default Services;