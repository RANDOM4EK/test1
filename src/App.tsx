import "./App.css";
import React, { Suspense } from "react";
import Header from "../src/component/Header"; // Header можно оставить обычным

// Lazy imports
const About = React.lazy(() => import("../src/component/About"));
const Experience = React.lazy(() => import("../src/component/Experience"));
const Skills = React.lazy(() => import("../src/component/Skills"));
const Projects = React.lazy(() => import("../src/component/Projects"));
const Contact = React.lazy(() => import("../src/component/Contact"));

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <Suspense fallback={<div>Загрузка секций...</div>}>
        <div className="about">
          <About />
        </div>
        <div className="experience">
          <Experience />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
