import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'snapshots', label: 'Snapshots' },
    { id: 'skills', label: 'Skills' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    smoothScroll(sectionId);
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => {
              scrollToSection('home');
              setIsOpen(false);
            }}
            className="flex items-center space-x-2 focus:outline-none group"
            aria-label="Scroll to top"
          >
            <Terminal className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
              ayush.saini
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 transform hover:scale-105'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;