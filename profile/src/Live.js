import React from 'react'
import code from './Assets/0225.mp4'




function Live() {
  
  return (
    <div className='main' id='home'>
<video className="glow" src={code} autoPlay loop muted/>
<div className='title' >
  <h1 className='tit2'>ANKIT DUBEY   </h1><br/>
  <h4 className='tit2'> FULL STACK DEVELOPER </h4>


</div>
  <div id="scroll-down-animation" className='scrooll'>
  <span class="mouse">
    <span class="move"></span>
  </span>
  <h2>Scroll down</h2>
</div>


    </div>
     )
}

export default Live
