// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Interests from "./components/Interests";

import "./styles/main.scss";

function App() {
  return (
    <div className="container">
      <Hero />
      <Experience />
      <Skill />
      <Projects />
      <Interests />
    </div>
  );
}

export default App;
