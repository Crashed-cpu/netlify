import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Snapshots from './components/Snapshots';
import Skills from './components/Skills';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter overflow-x-hidden">
      <Background />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Snapshots />
        <Skills />
        <Journal />
        <Contact />
      </main>
    </div>
  );
}

export default App;