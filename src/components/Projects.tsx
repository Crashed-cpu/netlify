import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowRight, Star } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Automation', 'ML', 'DevOps', 'Fullstack'];

  const projects = [
    {
      title: 'uvpy',
      summary: 'Modular Python toolkit for rapid development and automation',
      tags: ['Python', 'Automation', 'CLI'],
      category: 'Automation',
      liveDemo: 'https://github.com/yourusername/uvpy',
      sourceCode: 'https://github.com/yourusername/uvpy',
      featured: true,
      stars: 128,
      lastUpdated: '2023-10-15'
    },
    {
      title: 'Talky',
      summary: 'AI-powered voice interaction system with natural language processing',
      tags: ['AI', 'Voice', 'NLP', 'Python'],
      category: 'ML',
      liveDemo: 'https://github.com/yourusername/talky',
      sourceCode: 'https://github.com/yourusername/talky',
      featured: true,
      stars: 89,
      lastUpdated: '2023-09-22'
    },
    {
      title: 'WhatsApp Automation Tool',
      summary: 'Intelligent message automation and workflow management',
      tags: ['Automation', 'API', 'Node.js'],
      category: 'Automation',
      liveDemo: 'https://github.com/yourusername/whatsapp-automation',
      sourceCode: 'https://github.com/yourusername/whatsapp-automation',
      featured: true,
      stars: 156,
      lastUpdated: '2023-11-05'
    },
    {
      title: 'Linux Toolkit',
      summary: 'Comprehensive system administration and monitoring suite',
      tags: ['Linux', 'DevOps', 'Shell'],
      category: 'DevOps',
      liveDemo: 'https://github.com/yourusername/linux-toolkit',
      sourceCode: 'https://github.com/yourusername/linux-toolkit',
      featured: false,
      stars: 42,
      lastUpdated: '2023-08-30'
    },
    {
      title: 'Docker ML APIs',
      summary: 'Containerized machine learning model deployment platform',
      tags: ['Docker', 'ML', 'API', 'Python'],
      category: 'ML',
      liveDemo: 'https://github.com/yourusername/docker-ml-apis',
      sourceCode: 'https://github.com/yourusername/docker-ml-apis',
      featured: false,
      stars: 67,
      lastUpdated: '2023-10-10'
    },
    {
      title: 'Automation Panel',
      summary: 'Web-based dashboard for managing automation workflows',
      tags: ['React', 'Node.js', 'Dashboard'],
      category: 'Fullstack',
      liveDemo: 'https://github.com/yourusername/automation-panel',
      sourceCode: 'https://github.com/yourusername/automation-panel',
      featured: false,
      stars: 34,
      lastUpdated: '2023-09-15'
    },
    {
      title: 'JS API Bots',
      summary: 'Collection of intelligent bots for various platforms',
      tags: ['JavaScript', 'Bots', 'API'],
      category: 'Automation',
      liveDemo: 'https://github.com/yourusername/js-api-bots',
      sourceCode: 'https://github.com/yourusername/js-api-bots',
      featured: false,
      stars: 78,
      lastUpdated: '2023-11-12'
    },
    {
      title: 'PixelPaper',
      summary: 'Digital paper and note-taking application with AI features',
      tags: ['React', 'AI', 'Productivity'],
      category: 'Fullstack',
      liveDemo: 'https://github.com/yourusername/pixelpaper',
      sourceCode: 'https://github.com/yourusername/pixelpaper',
      featured: false,
      stars: 112,
      lastUpdated: '2023-10-28'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Toolkits of Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Systems designed to automate, optimize, and transform workflows across domains.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-cyan-500 text-gray-900 shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 border border-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl ${
                project.featured 
                  ? 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10' 
                  : 'border-gray-700 hover:border-gray-600 hover:shadow-gray-900/20'
              }`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/20">
                  <Star size={12} className="fill-yellow-300 text-yellow-300" />
                  <span>Featured</span>
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-700 group-hover:border-cyan-500/40 group-hover:text-cyan-400 group-hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <span>Updated {project.lastUpdated}</span>
                </div>

                <div className="flex gap-3 pt-4 mt-auto">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] group/button"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="opacity-70 group-hover/button:opacity-100 group-hover/button:translate-x-0.5 transition-all duration-200" />
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/90 text-gray-100 text-sm font-medium rounded-lg transition-all duration-300 border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] group/button"
                  >
                    <Github size={14} className="opacity-70 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-200" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;