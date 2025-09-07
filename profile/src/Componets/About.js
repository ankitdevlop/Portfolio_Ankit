import React from "react";
import "./About.css";
import bt from "../Assets/bootstrap.png";
import cp from "../Assets/c++.png";
import pg from "../Assets/postgress.png";
import css from "../Assets/css.png";
import express from "../Assets/express.png";
import js from "../Assets/js.png";
import ag from "../Assets/ag.png";
import rn from "../Assets/rn.png";
import react from "../Assets/react.png";
import tail from "../Assets/tailwindcss.png";
import git from "../Assets/github.png";
import c from "../Assets/c.png";
import java from "../Assets/java.png";
import mg from "../Assets/mg.png";
import html from "../Assets/html.png";
import Node from "../Assets/nodejs.png";
import cv from "../Assets/ankitdubeyResume_updated.pdf";
import nullc from '../Assets/null.png'
import airrchip from '../Assets/Screenshot 2024-08-30 235831.png'

function About() {
  const skills = [
 
    { src: js, name: "JavaScript" },
    { src: Node, name: "Node.js" },
    { src: express, name: "Express" },
    { src: react, name: "React" },
    { src: ag, name: "Angular" },
    { src: rn, name: "React Native" },
    { src: git, name: "GitHub" },
    { src: tail, name: "Tailwind" },
    { src: bt, name: "Bootstrap" },
    { src: pg, name: "PostgreSQL" },
    { src: mg, name: "MongoDB" },
    { src: c, name: "C" },
    { src: cp, name: "C++" },
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: java, name: "JAVA" },





  ];

  const experiences = [
    {
      company: "Tecnotree / Clarus Software Technologies",
      image: "https://vectorseek.com/wp-content/uploads/2023/09/Tecnotree-Logo-Vector.svg-.png",
      description: `Developing scalable React Native mobile applications with optimized performance and clean architecture.
  Integrated APIs and handled state management for seamless cross-platform user experiences. Worked on deploying and testing apps for both iOS and Android .`
    },
    {
      company: "AirChip",
      image: airrchip,
      description: "As a MERN Stack Developer, I specialize in building scalable web and mobile applications using ReactJS, Node.js, and Express. I create responsive UIs with Tailwind CSS and Bootstrap, while utilizing Redux and TypeScript for efficient state management and type safety."
    },
    {
      company: "CodeClause",
      image: "https://codeclause.com/assets/img/Main%20Logo.png",
      description: "My first internship was at CodeClause from May to June. During this period, I learned about dynamic website development and backend systems, gaining insights into how real-world websites function."
    },
    {
      company: "NullClass",
      image: nullc,
      description: "Second internship where I worked with Node.js, MongoDB, and Express. I polished my MERN skills and created a full MERN app titled 'Ask Question,' which you can find in the project section."
    },
    {
      company: "NullClass",
      image: nullc,
      description: "Third internship at NullClass where I developed a MERN stack course and integrated Firebase. It was an excellent learning experience."
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="container">
          <h1 className="hero-title">Creating Websites Since 2022</h1>
          <p className="hero-description">
            My passion lies in creating websites and applications that are both beautiful and functional. 
            With over a year and a half of experience in full-stack development, particularly with the MERN stack, 
            I'm always striving to create something unique and innovative.
          </p>
          <button className="download-btn">
            <a href={cv} download>Download CV</a>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Tech Arsenal</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                <img src={skill.src} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="card-image">
                  <img src={exp.image} alt={exp.company} />
                </div>
                <div className="card-content">
                  <h3>{exp.company}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="training-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Training & Certifications</h2>
          <div className="training-card">
            <img src={nullc} alt="NullClass Training" />
            <div className="training-content">
              <h3>MERN Stack Training - NullClass</h3>
              <p>
                Comprehensive training covering MERN stack concepts, MongoDB Atlas, 
                and building a Stack Overflow clone. Gained practical experience in 
                full-stack development and database management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
