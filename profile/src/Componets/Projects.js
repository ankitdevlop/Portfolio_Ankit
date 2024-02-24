import React from 'react'
import notes from '../Assets/notew.png'
import postman from '../Assets/postman.png'
import tictac from '../Assets/tictack.png'
import textana from '../Assets/textitel.png'
import employee from '../Assets/employee.png'
import anime from '../Assets/animewebsite.png'
import mobile from '../Assets/mobile.png'
import music from '../Assets/music.png'
import ecom from "../Assets/ecom.png"
import gst from "../Assets/gst.png"
import intern from "../Assets/internare.png"
import landing2 from "../Assets/landing2.png"
import video from '../Assets/video.png'
import ask from '../Assets/ask.png'
import "./project.css"
function Projects() {


  return (
    <div className='bo'>
    
    <div id='projects' >
    <div className='hedding rounded-3xl' >

<h2 className='pro gradient-text' data-aos-duration="1000" data-aos="fade-up" >PROJECTS</h2>
</div>

    <div class="container">
<h2 className='pro gradient-text ' data-aos-duration="1000" data-aos="fade-up" >Advance Projects </h2>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={intern} alt="My"  className='w-48'/> 
                    <h3>InternShala Clone</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>An internship platform replica built using the MERN stack, facilitating seamless connections between students and employers for valuable learning experiences</p>
                    <a href='https://internarea.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={ecom} alt="My"  className='w-48'/> 
                    <h3>E-Commerce Webiste</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>An e-commerce platform built with the MERN stack, providing a user-friendly interface for browsing and purchasing products, though payment methods are not integrated</p>
                    <a href='https://www.medoplanet.com/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={ask} alt="My"  className='w-48'/> 
                    <h3>Ask Questions Webiste</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A question-and-answer platform developed with the MERN stack, empowering users to ask questions, earn rewards points, and engage in knowledge-sharing communities</p>
                    <a href='https://askquestionc.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={anime} alt="My"  className='w-48'/> 
                    <h3>Anime Streaming  Webiste</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A captivating anime streaming site developed using the MERN stack, offering a vast library of shows and movies for enthusiasts to enjoy</p>
                    <a href='https://aniindia.netlify.app' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={postman} alt="My"  className='w-48'/> 
                    <h3>Post Man Clone</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A Postman clone developed using Vanilla JavaScript, allowing users to streamline API testing and collaboration with intuitive features</p>
                    <a href='https://propost.netlify.app' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={notes} alt="My"  className='w-48'/> 
                    <h3>Note Taking Webiste</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A seamless note-taking platform ensuring privacy and easy access by securely storing notes locally using browser's local storage</p>
                    <a href='https://ankitdevlop.github.io/NotesOn.web/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        </div>
        <h2 className='pro gradient-text ' data-aos-duration="1000" data-aos="fade-up" >Intermediate
 Projects </h2>

        <div className='container'>

 
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={tictac} alt="My"  className='w-48'/> 
                    <h3>Tic Tac Toe Game</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A classic Tic Tac Toe game implemented with HTML, CSS, and JavaScript, providing interactive gameplay for users to enjoy.</p>
                    <a href='https://ticktackankit.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={textana} alt="My"  className='w-48'/> 
                    <h3>Text analyzer  </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A text analyzer application crafted with React, enabling users to analyze and manipulate text for various linguistic insights and enhancementse</p>
                    <a href='https://ankitdevlop.github.io/reactjs/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={employee} alt="My"  className='w-48'/> 
                    <h3>Admin Panel </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>An admin panel developed using React, offering intuitive management tools and a user-friendly interface for efficient administration and control</p>
                    <a href='https://ankitdevlop.github.io/mockup/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={music} alt="My"  className='w-48'/> 
                    <h3>Music Player </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A sleek and interactive music player designed with HTML, CSS, and JavaScript, providing seamless playback and navigation for users to enjoy their favorite tunes.</p>
                    <a href='https://chotibhai.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>

        </div>

        <h2 className='pro gradient-text  ' data-aos-duration="1000" data-aos="fade-up" >Basic
 Projects </h2>
        <div className='container'>
 <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={mobile} alt="My"  className='w-48'/> 
                    <h3>Mobile Shop lending Page </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A mobile shop landing page designed with HTML and CSS, showcasing the latest devices and features with a sleek and responsive layout for an engaging user experience.</p>
                    <a href='https://mobileshopeank.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
 <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={video} alt="My"  className='w-48'/> 
                    <h3>Video Player </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A custom video player created using HTML, CSS, and JavaScript, offering personalized controls and features for an enhanced viewing experience</p>
                    <a href='https://customplayer.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
 <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={landing2} alt="My"  className='w-48'/> 
                    <h3>Basic Login Page </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>An online login user page designed for website authentication, providing secure access and personalized features for registered users.</p>
                    <a href='https://withoutlogin.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
 <div class="card">
            <div class="face face1">
                <div class="content">
                <img src={gst} alt="My"  className='w-48'/> 
                    <h3>GST invoice Generator </h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>A GST invoice generator designed to streamline billing processes, ensuring compliance with tax regulations and facilitating seamless transaction</p>
                    <a href='https://profound-fenglisu-a69408.netlify.app/' target='_blank' rel="noreferrer">Visit Now</a>
                </div>
            </div>
        </div>
    </div>




    </div>
    </div>
  )
}

export default Projects
