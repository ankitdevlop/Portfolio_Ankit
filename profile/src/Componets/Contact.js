import React from 'react';
import './Contact.css';
import { AiFillGithub } from "react-icons/ai";
import { GrInstagram, GrMail } from "react-icons/gr";
import { TbBrandZoom, TbDeviceLandlinePhone } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function Contact() {
  const contactInfo = [
    {
      icon: <TbDeviceLandlinePhone />,
      title: "Give us a Call",
      content: "+91 7304627858",
      link: "tel:+917304627858"
    },
    {
      icon: <GrMail />,
      title: "Send us an Email",
      content: "ankitdubey58825@gmail.com",
      link: "mailto:ankitdubey58825@gmail.com"
    },
    {
      icon: <TbBrandZoom />,
      title: "Virtual Meeting",
      content: "Available on Zoom",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <GrInstagram />,
      title: "Instagram",
      subtitle: "Follow my journey",
      link: "https://www.instagram.com/iankitd/",
      color: "#E4405F"
    },
    {
      icon: <AiFillGithub />,
      title: "GitHub",
      subtitle: "View my code",
      link: "https://github.com/ankitdevlop",
      color: "#333"
    },
    {
      icon: <FiTwitter />,
      title: "Twitter",
      subtitle: "Latest updates",
      link: "https://twitter.com/dubey9850",
      color: "#1DA1F2"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      subtitle: "Professional network",
      link: "https://www.linkedin.com/in/ankit-dubey-799a1323a/",
      color: "#0077B5"
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header" data-aos="fade-up">
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">Ready to start your next project? Let's build something amazing together.</p>
        </div>

        {/* Contact Information */}
        <div className="contact-info-section" data-aos="fade-up" data-aos-delay="200">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="contact-icon">
                  {item.icon}
                </div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  <a href={item.link} className="contact-link">{item.content}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section" data-aos="fade-up" data-aos-delay="400">
          <h2 className="section-title">Follow My Journey</h2>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card"
                data-aos="flip-left" 
                data-aos-delay={index * 100}
                style={{ '--hover-color': social.color }}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <div className="social-content">
                  <h3>{social.title}</h3>
                  <p>{social.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
