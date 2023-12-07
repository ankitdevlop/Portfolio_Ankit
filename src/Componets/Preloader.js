import React, { useEffect } from 'react'
import '../animation/preloader.css'
import {preLoaderAnim} from '../animation/index'
function Preloader() {
   useEffect(() => {
    preLoaderAnim()
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
