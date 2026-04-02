import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      
      value: 'nhatminhwork1@gmail.com',
      href: 'mailto:your.email@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      
      value: '0877-691-755',
      href: 'tel:0xxxxxxxxx'
    },
    {
      icon: '🔗',
      label: 'GitHub',
      
      value: 'github.com/nhatminh1-code',
      href: 'https://github.com/nhatminh1-code'
    },
    
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm looking for internship opportunities. 
          Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm currently seeking an AI Prompt Engineering 
              internship position. Let's connect!
            </p>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{info.icon}</span>
                <div>
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✅ Message sent successfully!
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;