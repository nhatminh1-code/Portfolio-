import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🧠 AI Portfolio</h3>
            <p>
              Built with React & AI-Assisted Development
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#tools">AI Tools</a>
            <a href="#prompts">Prompts</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-tools">
            <h4>Built With</h4>
            <p>⚛️ React</p>
            <p>🤖 ChatGPT</p>
            <p>🧠 Claude AI</p>
            <p>⚡ Cursor AI</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear}  All rights reserved.
          </p>
          <p className="footer-note">
            🚀 This portfolio was built with AI-assisted development 
            to demonstrate prompt engineering skills.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;