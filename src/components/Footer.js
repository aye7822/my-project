import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <p>Wefo</p>
      </div>
      <div className="links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Security</a>
      </div>
    </footer>
  );
};

export default Footer;