import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AITools from './components/AITools';
import PromptShowcase from './components/PromptShowcase';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <AITools />
      <PromptShowcase />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;