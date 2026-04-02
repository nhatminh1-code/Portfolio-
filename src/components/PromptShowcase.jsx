import React, { useState } from 'react';
import promptsData from '../data/promptsData';
import './PromptShowcase.css';

const PromptShowcase = () => {
  const [activePrompt, setActivePrompt] = useState(promptsData[0]);
  const [copied, setCopied] = useState(false);

  const categories = [...new Set(promptsData.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrompts = activeCategory === 'all'
    ? promptsData
    : promptsData.filter(p => p.category === activeCategory);

  const copyPrompt = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="prompts" className="section prompt-showcase">
      <div className="container">
        <h2 className="section-title">Prompt Engineering Showcase</h2>
        <p className="section-subtitle">
          Real prompt templates I use daily to boost my development 
          productivity with AI tools.
        </p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="prompt-layout">
          <div className="prompt-list">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className={`prompt-item ${activePrompt.id === prompt.id ? 'active' : ''}`}
                onClick={() => setActivePrompt(prompt)}
              >
                <span className="prompt-category-tag">{prompt.category}</span>
                <h4>{prompt.title}</h4>
              </div>
            ))}
          </div>

          <div className="prompt-detail">
            <div className="prompt-detail-header">
              <h3>{activePrompt.title}</h3>
              <span className="prompt-category-tag">
                {activePrompt.category}
              </span>
            </div>

            <div className="prompt-code-block">
              <div className="code-header">
                <span>📝 Prompt Template</span>
                <button
                  className="copy-btn"
                  onClick={() => copyPrompt(activePrompt.prompt)}
                >
                  {copied ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <pre className="code-content">
                {activePrompt.prompt}
              </pre>
            </div>

            <div className="prompt-result">
              <h4>💡 Result:</h4>
              <p>{activePrompt.result}</p>
            </div>

            <div className="prompt-tags">
              {activePrompt.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptShowcase;