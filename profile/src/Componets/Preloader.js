import React, { useEffect, useState } from 'react';
import "./preloader.css";
import { preLoaderAnim } from './Animation/index';

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    preLoaderAnim();
    
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`modern-preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-bg">
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="preloader-content">
        <div className="logo-container">
          <div className="logo-text">A</div>
          <div className="logo-ring"></div>
        </div>
        
        <div className="texts-container">
          <div className="text-line">
            <span className="text-item">Developer</span>
            <span className="text-separator">/</span>
          </div>
          <div className="text-line">
            <span className="text-item">Designer</span>
            <span className="text-separator">/</span>
          </div>
          <div className="text-line">
            <span className="text-item">Freelancer</span>
            <span className="text-dot">.</span>
          </div>
        </div>
        
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
