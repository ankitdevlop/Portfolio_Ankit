import React from 'react'
import code from './Assets/225.mp4'
import { useState } from 'react';
import { useEffect } from 'react';


function Live() {
  const [words] = useState(['FULL-STACK DEVELOPER','FRONT-END DEVELOPER', 'BACK-END DEVELOPER', ' FREELANCER', 'UI DESIGNER']);
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      setPart(newPart);
    }, speed);
    return () => clearInterval(interval);
  }, [forwards, i, offset, skipCount, speed, words]);
  return (
    <div className='main' id='home' style={{background:"#499e8e"}}>
{/* <video className="glow" src={code} autoPlay loop muted/> */}
<div className='title' >
<h1 className="tit2 text-black">HI ! I AM ANKIT</h1>
<br/>
<h4 className="tit2 font-extrabold text-black">
  AND I AM <br />
  <div className="word text-black h-24">{part}</div>
</h4>

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
