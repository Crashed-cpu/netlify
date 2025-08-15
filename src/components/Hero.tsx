import React from 'react';
import { Github, Linkedin, Twitter, Download, ExternalLink } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Crashed-cpu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/the-ayush-factor/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Ayushsa82728134', label: 'Twitter' },
  ];

  const scrollToProjects = () => smoothScroll('projects');
  const scrollToContact = () => smoothScroll('contact');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Hi, I'm <span className="text-cyan-400">Ayush</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-400 font-mono">
              "Automation isn't an add-on—it's my blueprint."
            </p>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Engineer. Automator. System Thinker. I build intelligent systems that transform complexity into clarity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 border border-gray-700 hover:border-gray-600">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 font-semibold rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              Let's Collaborate
            </button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;