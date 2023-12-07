import React from "react";

import start from "../Assets/start.jpg";
import gain from "../Assets/gain.jpg";
import pro from "../Assets/pro.jpg";
import frame from "../Assets/frame.jpg";
import back from "../Assets/back.jpg";
import bt from "../Assets/bootstrap.png";
import cp from "../Assets/c++.png";
import css from "../Assets/css.png";
import express from "../Assets/express.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import tail from "../Assets/tailwindcss.png";
import git from "../Assets/github.png";
import c from "../Assets/c.png";
import html from "../Assets/html.png";
import Node from "../Assets/nodejs.png";
import cerf from "../Assets/crf.pdf";
import cerf2 from "../Assets/nillcer.jpg";
import cv from "../Assets/cv.pdf";
import achivmetn from '../Assets/achivment.jpg'
import nullc from '../Assets/null.png'

function About() {
  // Function to check if an element is in the viewport

  return (
    <div id="about" className="hidden-element ">
      <div className="passion mt-4" data-aos="fade-up">
        <h1 className="gradient-text">Creating Websites Since 2022</h1>

        <p data-aos="zoom-in" data-aos-duration="1000">
          My passion lies in creating websites that are both beautiful and
          functional. <br /> I've been designing and coding websites for over a
          year and a half and <br /> I have recently started delving into
          Backend Development. <br />
          <br />
          <br />
          Whether I'm designing a sleek user interface or coding a complex
          application,
          <br /> I'm always striving to create something unique and innovative.{" "}
          <br /> I love experimenting with new technologies and staying -to-date
          with the latest trends in the tech world. <br />
          <br />
          <br />
          Currently, I'm working on some exciting projects that I can't wait to
          share with you. <br /> However, I'm always open to new opportunities
          and collaboration <br />
          <br />
        </p>
        <div className="cv">
          <button>
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
        data-aos="slide-up"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
        <img src={c} alt="" />
        <img src={cp} alt="" />
        <img src={html} alt="" />
        <img src={js} alt="" />
        <img src={css} alt="" />
        <img src={Node} alt="" />
        <img src={express} alt="" />
        <img src={react} alt="" />
        <img src={git} alt="" />
        <img src={tail} alt="" />
        <img src={bt} alt="" />
      </div>

      <div className="education">
        <div className="info" data-aos="zoom-in">
          <h1>Internship Attended </h1>

          <img
            alt=""
            className=""
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
            <button>
              <a href={cerf} download>
                Download certificate
              </a>
            </button>
          </div>
          <img
            alt=""
            className=""
            src={nullc}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          This is my second internship where I work with technologies like Node.js, MongoDB, and Express. I have learned how real-world projects are made with the help of Nullclass internship, and I have been able to polish my MERN (MongoDB, Express.js, React, Node.js) skills. During this period, I created a full MERN app titled 'Ask Question,' which you can find in the project section
          </p>
          <div className="cv">
            <button>
              <a href={cerf2} download>
                Download certificate
              </a>
            </button>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="info" data-aos="zoom-in">
          <h1>Training Attended </h1>

          <img
            alt=""
            className=""
            src={nullc}
            data-aos="zoom-in"
          />
          <p data-aos="zoom-in" data-aos-duration="1000">
          n this training, I learned about many concepts of MERN (MongoDB, Express, React, Node.js) and also how MongoDB Atlas works. I learned how to create a Stack Overflow clone using the MERN stack and how to connect with a database. In this training I made a Stack Overflow Clone also , I also discovered many interesting things. Currently, I am doing an internship at Null Class, which is one month long
          </p>
          <div className="cv">
            <button>
              <a href={achivmetn} download>
                Download certificate
              </a>
            </button>
          </div>
          <br />
          <br />
          <br />
        </div>

        <div className="info" data-aos="zoom-in">
          <h1>My Web Development Journey</h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            How I Gain Intrest
          </h3>
          <img alt="" className="" src={start} data-aos="zoom-in" />
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
          <img alt="" className="" src={gain} data-aos="zoom-in" />
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
          <img alt="" className="" src={pro} data-aos="zoom-in" />
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
          <img alt="" className="" src={frame} data-aos="zoom-in" />
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
          <h1>Learning Backend Languages </h1>
          <h3 className="mt-3 text-2xl ml-6" id="topic">
            Learning Backend Languages To Become a Full-stack Developer
          </h3>
          <img alt="" className="" src={back} data-aos="zoom-in" />
          <p data-aos="zoom-in" data-aos-duration="1000">
            Currently, I am in the phase of learning backend development. In
            this phase, I have completed Node.js and have started learning its
            framework, Express. Simultaneously, I am also learning about
            databases using MongoDB. After this, I am planning to work on a
            project, and I am very excited to showcase it to you
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
