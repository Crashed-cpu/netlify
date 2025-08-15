import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Snapshots from './components/Snapshots';
import Skills from './components/Skills';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Background from './components/Background';
import PageTransition from './components/PageTransition';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images and other assets
    const preloadAssets = async () => {
      try {
        // Add any critical assets that should be preloaded
        await Promise.all([
          // You can add more assets here if needed
          // new Promise((resolve) => {
          //   const img = new Image();
          //   img.src = '/path/to/important-image.jpg';
          //   img.onload = resolve;
          // }),
        ]);
      } catch (error) {
        console.error('Error preloading assets:', error);
      } finally {
        // Ensure loading state is set to false even if there's an error
        setTimeout(() => setIsLoading(false), 1000); // Minimum 1s loading time
      }
    };

    preloadAssets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter overflow-x-hidden">
      <PageTransition />
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