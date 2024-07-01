import React from "react";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="container mx-auto max-w-screen-lg px-3">
      <section  id="nav" >
      <Navbar /> 
     </section>  
      <section id="home">
        <Home />
      </section>
      <hr />
      <section id="skills">
        <Skill />
      </section>
      <hr />
      <section id="projects">
        <Project />
      </section>
      <hr />
      <section id="contact">
        <Contact />
      </section>
      <hr />
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
