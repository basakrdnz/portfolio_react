import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App custom-container font-spacegrotesk">
      <Hero />
      {/* <About /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
