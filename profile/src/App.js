import { useEffect } from "react";
import "./App.css";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import Preloader from "./Componets/Preloader";
import Projects from "./Componets/Projects";
import Form from "./Componets/Form";
import Live from "./Live";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const stalker = document.getElementById("stalker");

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      stalker.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // E
  return (
    
    <>


<Preloader/>
<div id="cursor"></div>
  <div id="stalker"></div>
      <Live />

      <About />
      <Projects />
      <Contact />
      <Form/>
      <Navbar />
      <Footer/>
      
    </>
  );
}

export default App;
