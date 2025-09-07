import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loder from '../Loder';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.post('https://ankiot-bakend-1.onrender.com/send-email', formData);
      
      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent successfully! 🚀');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-contact-form">
      {/* Floating Background Shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      {loading && <Loder />}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        }}
      />
      
      <form onSubmit={handleSubmit} className="contact-form-container">
        <div className="form-header">
          <h2 className="form-title">Let's Connect</h2>
          <p className="form-subtitle">Send me a message and I'll get back to you</p>
        </div>

        <div className="form-fields">
          <div className="input-group">
            <div className={`floating-label ${formData.name || focused.name ? 'active' : ''}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className="modern-input"
                required
              />
              <label htmlFor="name" className="input-label">Full Name</label>
              <div className="input-border"></div>
            </div>
          </div>

          <div className="input-group">
            <div className={`floating-label ${formData.email || focused.email ? 'active' : ''}`}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="modern-input"
                required
              />
              <label htmlFor="email" className="input-label">Email Address</label>
              <div className="input-border"></div>
            </div>
          </div>

          <div className="input-group">
            <div className={`floating-label ${formData.message || focused.message ? 'active' : ''}`}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                className="modern-textarea"
                rows="4"
                required
              />
              <label htmlFor="message" className="input-label">Your Message</label>
              <div className="input-border"></div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          <span className="btn-text">{loading ? 'Sending...' : 'Send Message'}</span>
          <div className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
