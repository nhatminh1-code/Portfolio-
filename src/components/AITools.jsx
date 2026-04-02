import React, { useState } from 'react';
import toolsData from '../data/toolsData';
import './AITools.css';

const AITools = () => {
  const [activeTool, setActiveTool] = useState(null);

  const toggleTool = (id) => {
    setActiveTool(activeTool === id ? null : id);
  };

  return (
    <section id="tools" className="section ai-tools">
      <div className="container">
        <h2 className="section-title">AI Tools I Use</h2>
        <p className="section-subtitle">
          These are the AI tools I integrate into my daily development 
          workflow to boost productivity and code quality.
        </p>

        <div className="tools-grid">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className={`tool-card ${activeTool === tool.id ? 'active' : ''}`}
              onClick={() => toggleTool(tool.id)}
            >
              <div className="tool-header">
                <span className="tool-icon">{tool.icon}</span>
                <h3 className="tool-name">{tool.name}</h3>
              </div>

              <p className="tool-description">{tool.description}</p>

              <div className="proficiency-bar">
                <div className="proficiency-label">
                  <span>Proficiency</span>
                  <span>{tool.proficiency}%</span>
                </div>
                <div className="proficiency-track">
                  <div
                    className="proficiency-fill"
                    style={{
                      width: `${tool.proficiency}%`,
                      background: tool.color
                    }}
                  ></div>
                </div>
              </div>

              <div className={`tool-usecases ${activeTool === tool.id ? 'show' : ''}`}>
                <h4>How I Use It:</h4>
                <ul>
                  {tool.useCases.map((useCase, i) => (
                    <li key={i}>✦ {useCase}</li>
                  ))}
                </ul>
              </div>

              <span className="expand-hint">
                {activeTool === tool.id ? 'Click to collapse' : 'Click to expand'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;