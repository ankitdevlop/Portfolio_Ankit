import React from "react";
import bt from "../Assets/bootstrap.png";
import cp from "../Assets/c++.png";
import pg from "../Assets/postgress.png";
import css from "../Assets/css.png";
import express from "../Assets/express.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import tail from "../Assets/tailwindcss.png";
import git from "../Assets/github.png";
import c from "../Assets/c.png";
import mg from "../Assets/mg.png";
import html from "../Assets/html.png";
import Node from "../Assets/nodejs.png";
import cv from "../Assets/Ankit Dubey Resume.docx";
import nullc from '../Assets/null.png'
import airrchip from '../Assets/Screenshot 2024-08-30 235831.png'

function About() {
  // Function to check if an element is in the viewport

  return (
    <div id="about" className="hidden-element  ">
      <div className="passion mt-5" data-aos="fade-up">
        <h1 className="gradient-text">Creating Websites Since 2022</h1>

        <p data-aos="zoom-in" data-aos-duration="1000">
    My passion lies in creating websites and applications that are both beautiful and functional. <br />
    With over a year and a half of experience in designing and coding, I've honed my skills in full-stack development, particularly with the MERN stack. <br />
    <br />
    Whether I'm crafting a sleek user interface or building robust backend systems, <br />
    I'm always striving to create something unique and innovative. <br />
    I enjoy experimenting with new technologies and staying up-to-date with the latest trends in the tech world. <br />
    <br />
    Alongside my expertise in React and Node.js, I have also transitioned into mobile development with React Native and have solid experience with PostgreSQL for database management. <br />
    <br />
    I'm always open to new opportunities and collaborations. <br />
</p>

        <div className="cv">
          <button className="glow">
            <a href={cv} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <h1 className="ar" data-aos="fade-down">
        Arsenal
      </h1>
      <div
        className="skills"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <img src={c} alt="" className="glow" />
        <img src={cp} alt="" className="glow" />
        <img src={html} alt="" className="glow" />
        <img src={js} alt="" className="glow" />
        <img src={css} alt="" className="glow" />
        <img src={Node} alt="" className="glow" />
        <img src={express} alt="" className="glow" />
        <img src={react} alt="" className="glow" />
        <img src={git} alt="" className="glow" />
        <img src={tail} alt="" className="glow" />
        <img src={bt} alt="" className="glow" />
        <img src={pg} alt="" className="glow" />
        <img src={mg} alt="" className="glow" />
      </div>

      <div className="education">
        <div className="info" data-aos="zoom-in">
        <h1 style={{textAlign:"center"}}>Experiences </h1>
          <img
            alt="" className="glow"
            
            src={airrchip}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          As a MERN Stack Developer, I specialize in building scalable web and mobile applications using ReactJS, Node.js, and Express. I create responsive UIs with Tailwind CSS and Bootstrap, while utilizing Redux and TypeScript for efficient state management and type safety. My backend expertise extends to microservices with Molecular JS and database management with MongoDB, MySQL, and PostgreSQL, ensuring robust and high-performance solutions across platforms.
          </p>
          <div className="cv">
         
          </div>
          <img
            alt="" className="glow"
            
            src="https://codeclause.com/assets/img/Main%20Logo.png"
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
            My first internship was at CodeCluse, which I attended from May to
            June. During this internship period, I learned about dynamic website
            development and website backend. In this span of time, I gained
            insights into how real-world websites function
          </p>
          <div className="cv">
         
          </div>
          <img 
            alt="" className="glow"
         
            src={nullc}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          This is my second internship where I work with technologies like Node.js, MongoDB, and Express. I have learned how real-world projects are made with the help of Nullclass internship, and I have been able to polish my MERN (MongoDB, Express.js, React, Node.js) skills. During this period, I created a full MERN app titled 'Ask Question,' which you can find in the project section
          </p>
          <div className="cv">
          </div>
          <br />
          <br />
          <br />
          <img 
            alt="" className="glow"
         
            src={nullc}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          This is my third and second internship in Nullclass where I made a MERN stack course for the Nullclass, and I also used Firebase for this. It was a very good experience with the Nullclass.          </p>
          <div className="cv">
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1>Training Attended </h1>

          <img
            alt="" className="glow"
      
            src={nullc}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          this training, I learned about many concepts of MERN (MongoDB, Express, React, Node.js) and also how MongoDB Atlas works. I learned how to create a Stack Overflow clone using the MERN stack and how to connect with a database. In this training I made a Stack Overflow Clone also , I also discovered many interesting things. Currently, I am doing an internship at Null Class, which is one month long
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
