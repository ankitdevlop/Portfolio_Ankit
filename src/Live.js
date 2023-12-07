import React from 'react'
// import icon from './Assets/ElIG5DdtGyOv.gif'
import code from './Assets/code.mp4'
import arrow from './Assets/arro.png'



function Live() {
  
  return (
    <div className='main' id='home'>
<video src={code} autoPlay loop muted/>
<div className='title' data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-duration="1300">
  <h1>ANKIT DUBEY   </h1><br/>
  <h4> Web Developer & React Developer . </h4>

<a href='#about'><img src={arrow} width={"50px"}  alt=''/></a>

</div>


    </div>
     )
}

export default Live
