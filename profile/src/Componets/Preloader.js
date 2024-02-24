import React, { useEffect } from 'react'
import "./preloader.css"
import {preLoaderAnim} from './Animation/index'
function Preloader() {
   useEffect(() => {
  preLoaderAnim();
   }, []);


  return (
    <>
    <div className="preloader">
        <div className="texts-container">
            <span>Developer /</span>
            <span>Designer /</span>
            <span>Freelancer.</span>
        </div>
    </div>
    </>
  )
}

export default Preloader
