import React from 'react'
import code from './Assets/0225.mp4'




function Live() {
  
  return (
    <div className='main' id='home'>
<video className="glow" src={code} autoPlay loop muted/>
<div className='title' data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-duration="1300">
  <h1 className='tit'data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-duration="1300">ANKIT DUBEY   </h1><br/>
  <h4 className='tit'data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-duration="1300"> FULL STACK DEVELOPER </h4>

  <div id="scroll-down-animation" className='scrooll'>
  <span class="mouse">
    <span class="move"></span>
  </span>
  <h2>Scroll down</h2>
</div>

</div>


    </div>
     )
}

export default Live
