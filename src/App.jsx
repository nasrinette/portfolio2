import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Stars from './components/Stars';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;  // To avoid horizontal scrolling if any
  }

  .section {
    min-height: 100vh; // Ensures that each section takes up at least the full height of the viewport
    display: flex;
    justify-content: center;
    align-items: center; // These will vertically and horizontally center the content of each section
  }
`;


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="skills">
        <Skills />
      </div>
      <div className="section" id="projects">
        <Projects />
      </div>
      <div className="section" id="contact">
        <Contact />
      </div>
      <Stars />
    </>
  );
};

export default App;
