import React, { useState, useEffect } from 'react';
import './Live.css';

function Live() {
  const [words] = useState(['FULL-STACK DEVELOPER', 'FRONT-END DEVELOPER', 'BACK-END DEVELOPER', 'FREELANCER', 'UI DESIGNER', 'Native App Developer']);
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
    <div className='hero-container' id='home'>
      <div className='hero-background'>
        <div className='animated-bg'></div>
      </div>
      
      <div className='hero-content'>
        <div className='hero-text'>
          <h1 className="hero-greeting">Hi! I'm Ankit</h1>
          <div className="hero-role">
            <span className="role-prefix">And I'm a</span>
            <div className="typing-text">
              {part}<span className="cursor">|</span>
            </div>
          </div>
          <p className="hero-description">
            Passionate about creating beautiful, functional  App & web experiences
          </p>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}

export default Live;
