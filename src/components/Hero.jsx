import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    'Prompt Engineer',
    'React Developer',
    'AI Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-greeting">👋 Xin chao, I'm Minh</p>
        <h1 className="hero-name">
          {}
          NGuyễn Nhật Minh
        </h1>
        <h2 className="hero-title">
          I'm a <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          Im passionate about leveraging AI tools like 
          ChatGPT, Claude & Cursor AI to build modern web applications 
          with React, PHP & Flutter.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;