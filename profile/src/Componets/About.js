import React from "react";

import start from "../Assets/start.jpg";
import gain from "../Assets/gain.jpg";
import pro from "../Assets/pro.jpg";
import frame from "../Assets/frame.jpg";
import back from "../Assets/back.jpg";
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
import cerf from "../Assets/crf.pdf";
import cerf2 from "../Assets/nillcer.jpg";
import cerf3 from "../Assets/1707146529034.jpg";
import cv from "../Assets/Ankit Dubey Resume.docx";
import achivmetn from '../Assets/achivment.jpg'
import nullc from '../Assets/null.png'

function About() {
  // Function to check if an element is in the viewport

  return (
    <div id="about" className="hidden-element  ">
      <div className="passion mt-5" data-aos="fade-up">
        <h1 className="gradient-text">Creating Websites Since 2022</h1>

        <p data-aos="zoom-in" data-aos-duration="1000">
    My passion lies in creating websites that are both beautiful and functional. <br /> 
    I've been designing and coding websites for over a year and a half, and I have already transitioned into Backend Development. <br />
    <br />
    Whether I'm designing a sleek user interface or coding a complex application, <br /> 
    I'm always striving to create something unique and innovative. <br /> 
    I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world. <br />
    <br />
    Currently, I'm working on some exciting projects that I can't wait to share with you. <br /> 
    Additionally, I have expanded my role into software development and I'm currently learning about reactive programming for future projects. <br />
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
        data-aos-duration="1000"
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
          <h1>Internship Attended </h1>

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
          n this training, I learned about many concepts of MERN (MongoDB, Express, React, Node.js) and also how MongoDB Atlas works. I learned how to create a Stack Overflow clone using the MERN stack and how to connect with a database. In this training I made a Stack Overflow Clone also , I also discovered many interesting things. Currently, I am doing an internship at Null Class, which is one month long
          </p>
          <br />
          <br />
          <br />
        </div>

        <div className="info" data-aos="zoom-in">
          <h1>My Web Development Journey</h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            How I Gain Intrest
          </h3>
          <img alt="" className="glow"  src={start} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
            When I was in the 11th standard, I heard about coding, and it
            sounded like fun. So, I decided to give it a try, even though I was
            a commerce student with plans to pursue computer science in the
            future. After some time, I developed an interest in web development.
            I began learning web development during my 12th standard, alongside
            preparing for my board exams. I continued coding for web development
            while also studying for my exams
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1>My First Coding Language </h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            How I Understand Coding Concepts
          </h3>
          <img alt="" className="glow"  src={gain} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
            When I started coding, I began with relatively simple things like
            HTML and basic CSS. After working with these languages, I started to
            believe that coding could be easy for me. Following that, I was
            introduced to the programming language JavaScript. This language
            pushed me to work harder and helped me gain a deeper understanding
            of what coding is and the fundamental concepts of coding.
          </p>
          <br />
          <br />
          <br />
        </div>

        <div className="info" data-aos="zoom-in">
          <h1>My First Project </h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            How did I create my first project?
          </h3>
          <img alt="" className="glow" src={pro} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
            After learning many things in JavaScript, HTML, and CSS, I started
            making projects. My first project involving these technologies was a
            landing page for a shop and a bookshop landing page. Here, I
            practiced CSS animations, transitions, and various JavaScript
            concepts. After that, I undertook a more complex project, which is a
            Postman clone. This was the most challenging project I've tackled.
            With this project, I was able to retrieve data using an API and also
            input data into the website
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1>Frame Works in Web Development </h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            Learning Frame Works
          </h3>
          <img alt="" className="glow"  src={frame} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
            After all of this, I learned about frameworks. I conducted research
            to understand what frameworks are, and I discovered that frameworks
            help reduce the amount of code one needs to write, making them
            incredibly useful for development. Initially, I learned Bootstrap,
            followed by Tailwind CSS and React.js frameworks. I gained a good
            understanding of these frameworks and even completed projects using
            these concepts
          </p>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1> Backend Languages </h1>
          <img alt="" className="glow"  src={back} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
    I have already immersed myself in learning backend development with the MEAN stack. <br /> 
    In this phase, I have completed Node.js and delved into its framework, Express. <br />
    Simultaneously, I have been exploring databases using MongoDB. <br />
    After this foundational learning, I am gearing up to embark on a project, and I am very excited to showcase it to you. <br />
</p>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1> React Native </h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
           Learning React Native
          </h3>
          <img alt="" className="glow"  src="https://crowdbotics.ghost.io/content/images/2021/02/ReactNativeFeaturedImage.png" data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
    I have already immersed myself in learning backend development with the MEAN stack. <br /> 
    In this phase, I have completed Node.js and delved into its framework, Express. <br />
    Simultaneously, I have been exploring databases using MongoDB. <br />
    Additionally, I am diving into mobile app development with React Native. <br />
    After this foundational learning, I am gearing up to embark on a project, and I am very excited to showcase it to you. <br />
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
