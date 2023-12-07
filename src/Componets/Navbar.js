import React from 'react'

function Navbar() {
  return (
    <>
    <div id='navB'>

        <nav class="fixed bottom-3   py-4">
        <div class="container mx-auto flex justify-center items-center">
    
            <ul class="flex justify-center space-x-4">
                <li><a href="#home" >Home</a></li>
                <li><a href="#about" >About</a></li>
                <li><a href="#projects" >Projects</a></li>
                <li><a href="#contact" class=" mx-3">Contact</a></li>
            </ul>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
