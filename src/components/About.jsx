import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '3+', label: 'AI Tools Mastered' },
    { number: '10+', label: 'Prompts Crafted' },
    { number: '2+', label: 'Projects Built' },
    { number: '∞', label: 'Desire to Learn' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>A Passionate IT Student & AI Enthusiast</h3>
            <p>
              {}
              I'm with a strong interest in modern web development and 
              AI-assisted programming. I believe that the future of 
              software development lies in the effective collaboration 
              between developers and AI tools.
            </p>
            <p>
              I actively use ChatGPT, Claude AI, and Cursor AI in my 
              daily coding workflow — from generating boilerplate code 
              to debugging complex issues and learning new frameworks 
              like React, PHP, and Flutter.
            </p>
            <p>
              I'm seeking an internship opportunity where I can apply 
              my prompt engineering skills and web development knowledge 
              in a real-world environment.
            </p>

            <div className="about-tags">
              <span className="tag">React</span>
              <span className="tag">PHP</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Prompt Engineering</span>
              <span className="tag">ChatGPT</span>
              <span className="tag">Claude AI</span>
              <span className="tag">Cursor AI</span>
              <span className="tag">Git</span>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;