import React from 'react'
import notes from '../Assets/notew.png'
import postman from '../Assets/postman.png'
import tictac from '../Assets/tictack.png'
import textana from '../Assets/textitel.png'
import employee from '../Assets/employee.png'
import anime from '../Assets/animewebsite.png'
import mobile from '../Assets/mobile.png'
import music from '../Assets/music.png'
import video from '../Assets/video.png'
import ask from '../Assets/ask.png'

function Projects() {
  

  return (
    <>
      <div className='hedding' >

      <h2 className=' pro  gradient-text' data-aos-duration="1000" data-aos="fade-up" >PROJECTS</h2>
      </div>
    <div id='projects' >
<div class="project" data-aos-duration="1000" data-aos="fade-down">
<h2 className="gradient"><a href='https://ankitdevlop.github.io/NotesOn.web/' target='_blank' rel="noreferrer">   Note Taking Website</a></h2>
  <img src={notes} alt="My"/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-up">
<h2 className="gradient"><a href='https://propost.netlify.app' target='_blank' rel="noreferrer"> Post Man Clone</a></h2>
  <img src={postman} alt="My"/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-down">
<h2 className="gradient"><a href='https://ticktackankit.netlify.app/' target='_blank' rel="noreferrer">  Tic Tac Toe Website</a></h2>
  <img src={tictac} alt="My"/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-up">
<h2 className="gradient"><a href='https://ankitdevlop.github.io/reactjs/' target='_blank' rel="noreferrer">  Text Analizer Website</a></h2>
  <img src={textana} alt="My"/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-down" id='emp'>
<h2 className="gradient ml-3"><a href='https://ankitdevlop.github.io/mockup/' target='_blank' rel="noreferrer">  Employee Details</a></h2>
  <img src={employee} alt="My" /> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-up">
<h2 className="gradient"><a href='https://aniindia.netlify.app' target='_blank' rel="noreferrer">  Anime Website Clone </a></h2>
  <img src={anime} alt="My"/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-down">
<h2 className="gradient"><a href='https://mobileshopeank.netlify.app/' target='_blank' rel="noreferrer">  Mobile Landing Page</a> </h2>
  <img src={mobile} alt="My" id='fix'/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-up">
<h2 className="gradient"><a href='https://chotibhai.netlify.app/' target='_blank' rel="noreferrer">Music Player </a> </h2>
  <img src={music} alt="My" id='fix'/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-down">
<h2 className="gradient"><a href="https://customplayer.netlify.app/"target='_blank' rel="noreferrer">Custom Video Player  </a> </h2>
  <img src={video} alt="My" id='fix'/> 
</div>
<div class="project" data-aos-duration="1000" data-aos="fade-up">
<h2 className="gradient"><a href='https://askquestionc.netlify.app/' target='_blank' rel="noreferrer">Ask Question</a> </h2>
  <img src={ask} alt="My" id='fix'/> 
</div>

    </div>
    </>
  )
}

export default Projects
