import React from 'react';

import Banner from './components/Banner';

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
