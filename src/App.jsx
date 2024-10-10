import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App custom-container font-spacegrotesk">
      <NavBar />
      <Hero />
      <div className="custom-line"></div>
      <Skills />
      <div className="custom-line"></div>
      <Projects></Projects>
      <div className="custom-line"></div>
      <Contact />
    </div>
  );
}

export default App;
