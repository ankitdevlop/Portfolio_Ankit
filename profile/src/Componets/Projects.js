import React from 'react';
import './Projects.css';
import notes from '../Assets/notew.png';
import postman from '../Assets/postman.png';
import tictac from '../Assets/tictack.png';
import textana from '../Assets/textitel.png';
import employee from '../Assets/employee.png';
import anime from '../Assets/animewebsite.png';
import mobile from '../Assets/mobile.png';
import music from '../Assets/music.png';
import ecom from "../Assets/ecom.png";
import gst from "../Assets/gst.png";
import intern from "../Assets/internare.png";
import landing2 from "../Assets/landing2.png";
import video from '../Assets/video.png';
import ask from '../Assets/ask.png';
import todo from '../Assets/todo.png';
function Projects() {
  const projectCategories = [
    {
      title: "Advanced Projects",
      projects: [
        {
          title: "Pakka Pay",
          image: "https://static.wixstatic.com/media/213034_be2bf6528c7f48b6b4471125910db6d6~mv2.png/v1/fill/w_163,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PakkaPay_logo_New.png",
          description: "A fintech project connecting vendors and wholesalers with payment solutions and credit lines. I worked as lead backend developer and handled integrations.",
          link: "",
          tech: ["MERN", "Fintech", "Backend"]
        },
        {
          title: "Oomero",
          image: "https://static.wixstatic.com/media/aaa15d_4052d6a3e5f74db39cefcc5d9c117d2c~mv2.png/v1/fill/w_271,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/transparent%20logo-02.png",
          description: "Background verification system for company employees to identify defaulters. Worked as junior developer under senior guidance.",
          link: "",
          tech: ["Verification", "Backend", "Security"]
        },
        {
          title: "E-Commerce Website",
          image: ecom,
          description: "Full-featured e-commerce platform built with MERN stack, providing user-friendly interface for browsing and purchasing products.",
          link: "",
          tech: ["MERN", "E-commerce", "Full-stack"]
        },
        {
          title: "Ask Questions Platform",
          image: ask,
          description: "Q&A platform with MERN stack, enabling users to ask questions, earn rewards, and engage in knowledge-sharing communities.",
          link: "https://askquestionc.netlify.app/",
          tech: ["MERN", "Community", "Rewards"]
        },
        {
          title: "Anime Streaming Site",
          image: anime,
          description: "Captivating anime streaming platform with vast library of shows and movies for enthusiasts.",
          link: "https://aniindia.netlify.app",
          tech: ["MERN", "Streaming", "Entertainment"]
        },
        {
          title: "Postman Clone",
          image: postman,
          description: "API testing tool built with Vanilla JavaScript for streamlined testing and collaboration.",
          link: "https://propost.netlify.app",
          tech: ["JavaScript", "API", "Testing"]
        },
        {
          title: "Full-Stack Task Management & User Administration Platform Using Angular",
          // image: todo,
          description: "Full-stack web application built with Angular 17 and Node.js featuring user authentication, task management, note-taking, and admin dashboard. Includes JWT authentication, responsive design with Tailwind CSS, and modern Angular standalone components.",
          link: "https://todomaster-angular.netlify.app/",
          tech: ["Angular 17", "TypeScript", "Node.js", "JWT", "Tailwind CSS","PostgreSQL", "RESTful APIs"]
        }
      ]
    },
    {
      title: "Intermediate Projects",
      projects: [
        {
          title: "Note Taking App",
          image: notes,
          description: "Privacy-focused note-taking platform with local storage for secure and easy access.",
          link: "https://ankitdevlop.github.io/NotesOn.web/",
          tech: ["JavaScript", "Local Storage", "Privacy"]
        },
        {
          title: "Tic Tac Toe Game",
          image: tictac,
          description: "Classic game implementation with HTML, CSS, and JavaScript for interactive gameplay.",
          link: "https://ticktackankit.netlify.app/",
          tech: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "Text Analyzer",
          image: textana,
          description: "React-based text analysis tool for linguistic insights and text manipulation.",
          link: "https://ankitdevlop.github.io/reactjs/",
          tech: ["React", "Text Processing", "Analytics"]
        },
        {
          title: "Admin Panel",
          image: employee,
          description: "React-based admin interface with intuitive management tools and user-friendly controls.",
          link: "https://ankitdevlop.github.io/mockup/",
          tech: ["React", "Admin", "Management"]
        }
      ]
    },
    {
      title: "Basic Projects",
      projects: [
        {
          title: "Music Player",
          image: music,
          description: "Sleek music player with seamless playback and navigation for favorite tunes.",
          link: "https://chotibhai.netlify.app/",
          tech: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "Mobile Shop Landing",
          image: mobile,
          description: "Responsive landing page showcasing latest devices with engaging user experience.",
          link: "https://mobileshopeank.netlify.app/",
          tech: ["HTML", "CSS", "Responsive"]
        },
        {
          title: "Video Player",
          image: video,
          description: "Custom video player with personalized controls and enhanced viewing experience.",
          link: "https://customplayer.netlify.app/",
          tech: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "GST Invoice Generator",
          image: gst,
          description: "Streamlined billing solution ensuring tax compliance and seamless transactions.",
          link: "https://profound-fenglisu-a69408.netlify.app/",
          tech: ["JavaScript", "Invoice", "GST"]
        },
        {
          title: "ToDo Master Using Angular",
          image: todo,
          description: "this is my first angular project in which i create a todo app and we can also add add and removes the items here",
          link: "https://todomaster-angular.netlify.app/",
          tech: ["JavaScript", "Angular", "Task Maangement"]
        },
        
      ]
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header" data-aos="fade-up">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">Showcasing my journey through code and creativity</p>
      </div>

      {projectCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="project-category" data-aos="fade-up" data-aos-delay={categoryIndex * 200}>
          <h2 className="category-title">{category.title}</h2>
          <div className="projects-grid">
            {category.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="project-card" data-aos="zoom-in" data-aos-delay={projectIndex * 100}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="tech-stack">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link btn btn-primary">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Projects;
