import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Python', 'Linux', 'Docker', 'JavaScript', 'Machine Learning', 'Git', 'DevOps', 'Automation'];

  const projects = [
    // Featured Projects
    {
      title: 'Python Automation Suite',
      summary: 'Collection of Python scripts for system automation and web interactions',
      tags: ['Python', 'Automation', 'Web Scraping', 'APIs'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/python-automation-suite',
      featured: true,
      stars: 18
    },
    {
      title: 'Linux System Manager',
      summary: 'Comprehensive Linux system administration toolkit and scripts',
      tags: ['Linux', 'Bash', 'System Administration'],
      category: 'Linux',
      sourceCode: 'https://github.com/ayushsainii/linux-system-manager',
      featured: true,
      stars: 15
    },
    {
      title: 'Docker Dev Environment',
      summary: 'Containerized development environments for various tech stacks',
      tags: ['Docker', 'DevOps', 'Containers'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-dev-env',
      featured: true,
      stars: 22
    },

    // Python Projects
    {
      title: 'Email Sender',
      summary: 'Python script to send emails programmatically',
      tags: ['Python', 'Email', 'SMTP', 'Automation'],
      category: 'Python',
      sourceCode: 'https://github.com/Crashed-cpu/python-automation',
      stars: 6
    },
    {
      title: 'RAM Reader',
      summary: 'Python script to read and analyze system RAM',
      tags: ['Python', 'System', 'Memory'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/python-ram-reader',
      stars: 7
    },
    {
      title: 'WhatsApp Automation',
      summary: 'Send WhatsApp messages programmatically',
      tags: ['Python', 'WhatsApp', 'Automation'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/whatsapp-automation',
      stars: 15
    },
    {
      title: 'Email Sender with Attachments',
      summary: 'Python script to send emails with attachments',
      tags: ['Python', 'Email', 'SMTP', 'Attachments'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/python-email-sender',
      stars: 5
    },
    {
      title: 'Anonymous WhatsApp',
      summary: 'Send WhatsApp messages without saving contacts',
      tags: ['Python', 'WhatsApp', 'Automation'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/anonymous-whatsapp',
      stars: 12
    },
    {
      title: 'SMS Sender',
      summary: 'Send SMS messages using Python',
      tags: ['Python', 'SMS', 'Twilio'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/sms-sender',
      stars: 8
    },
    {
      title: 'Voice Caller',
      summary: 'Make phone calls programmatically',
      tags: ['Python', 'Voice', 'Twilio'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/voice-caller',
      stars: 6
    },
    {
      title: 'Google Search CLI',
      summary: 'Search Google from the command line',
      tags: ['Python', 'Web Scraping', 'CLI'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/google-search-cli',
      stars: 10
    },
    {
      title: 'Social Media Poster',
      summary: 'Automate posts on Instagram, Twitter, and Facebook',
      tags: ['Python', 'Social Media', 'Automation'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/social-media-poster',
      stars: 18
    },
    {
      title: 'Web Scraper',
      summary: 'Download and extract data from websites',
      tags: ['Python', 'Web Scraping', 'BeautifulSoup'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/web-scraper',
      stars: 14
    },
    {
      title: 'Anonymous Emailer',
      summary: 'Send emails without revealing your identity',
      tags: ['Python', 'Email', 'Privacy'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/anonymous-emailer',
      stars: 9
    },
    {
      title: 'Image Generator',
      summary: 'Create digital images programmatically',
      tags: ['Python', 'PIL', 'Image Processing'],
      category: 'Python',
      sourceCode: 'https://github.com/ayushsainii/image-generator',
      stars: 11
    },
    {
      title: 'Face Swapper',
      summary: 'Swap faces between two images',
      tags: ['Python', 'OpenCV', 'Face Recognition'],
      category: 'Machine Learning',
      sourceCode: 'https://github.com/ayushsainii/face-swapper',
      stars: 16
    },
    {
      title: 'Linux GUI Inspector',
      summary: 'Analyze GUI application commands',
      tags: ['Linux', 'GUI', 'System'],
      category: 'Linux',
      sourceCode: 'https://github.com/ayushsainii/linux-gui-inspector',
      stars: 3
    },
    {
      title: 'Linux Icon Manager',
      summary: 'Modify application icons in Linux',
      tags: ['Linux', 'GUI', 'Theming'],
      category: 'Linux',
      sourceCode: 'https://github.com/ayushsainii/linux-icon-manager',
      stars: 7
    },
    {
      title: 'Terminal Communications',
      summary: 'Send messages from Linux terminal',
      tags: ['Linux', 'Terminal', 'Automation'],
      category: 'Linux',
      sourceCode: 'https://github.com/ayushsainii/terminal-communications',
      stars: 9
    },
    {
      title: 'Docker Apache',
      summary: 'Apache web server in Docker',
      tags: ['Docker', 'Apache', 'Web Server'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-apache',
      stars: 6
    },
    {
      title: 'Docker Systemd',
      summary: 'Systemd inside Docker containers',
      tags: ['Docker', 'Systemd', 'Containers'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-systemd',
      stars: 8
    },
    {
      title: 'GUI in Docker',
      summary: 'Run GUI applications in Docker',
      tags: ['Docker', 'GUI', 'X11'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-gui',
      stars: 10
    },
    {
      title: 'Docker Audio',
      summary: 'Audio support in Docker containers',
      tags: ['Docker', 'Audio', 'PulseAudio'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-audio',
      stars: 5
    },
    {
      title: 'Docker in Docker',
      summary: 'Nested Docker environments',
      tags: ['Docker', 'DIND', 'CI/CD'],
      category: 'Docker',
      sourceCode: 'https://github.com/ayushsainii/docker-in-docker',
      stars: 7
    },
    
    // JavaScript Projects
    {
      title: 'Webcam Photo',
      summary: 'Capture photos using browser webcam',
      tags: ['JavaScript', 'WebRTC', 'Camera'],
      category: 'JavaScript',
      liveDemo: 'https://ayushsainii.github.io/webcam-photo',
      sourceCode: 'https://github.com/Crashed-cpu/javascript_automation',
      stars: 9
    },

    {
      title: 'Photo Emailer',
      summary: 'Send captured photos via email',
      tags: ['JavaScript', 'Email', 'WebRTC'],
      category: 'JavaScript',
      sourceCode: 'https://github.com/Crashed-cpu/javascript_automation',
      stars: 8
    },
    {
      title: 'Video Recorder',
      summary: 'Record and email videos from browser',
      tags: ['JavaScript', 'MediaRecorder', 'WebRTC'],
      category: 'JavaScript',
      sourceCode: 'https://github.com/Crashed-cpu/javascript_automation',
      stars: 11
    },
    {
      title: 'WhatsApp Web',
      summary: 'Send WhatsApp messages via web',
      tags: ['JavaScript', 'WhatsApp', 'API'],
      category: 'JavaScript',
      sourceCode: 'https://github.com/Crashed-cpu/javascript_automation',
      stars: 14
    },
    
    // Machine Learning Projects
    {
      title: 'Linear Regression',
      summary: 'Dockerized linear regression model',
      tags: ['Python', 'Machine Learning', 'Docker'],
      category: 'Machine Learning',
      sourceCode: 'https://github.com/ayushsainii/linear-regression-docker',
      stars: 7
    },
    {
      title: 'Flask ML App',
      summary: 'Machine learning model served via Flask',
      tags: ['Python', 'Flask', 'Docker', 'ML'],
      category: 'Machine Learning',
      sourceCode: 'https://github.com/ayushsainii/flask-ml-app',
      stars: 9
    },
    
    // Git Projects
    {
      title: 'Git Basics',
      summary: 'Basic Git repository setup and management',
      tags: ['Git', 'Version Control'],
      category: 'Git',
      sourceCode: 'https://github.com/ayushsainii/git-basics',
      stars: 3
    },
    {
      title: 'Branch Management',
      summary: 'Advanced Git branching strategies',
      tags: ['Git', 'Branches', 'Workflow'],
      category: 'Git',
      sourceCode: 'https://github.com/ayushsainii/git-branching',
      stars: 5
    },
    {
      title: 'Open Source Contribution',
      summary: 'Example of contributing to open source',
      tags: ['Git', 'GitHub', 'Open Source'],
      category: 'Git',
      sourceCode: 'https://github.com/ayushsainii/open-source-contrib',
      stars: 8
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
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              summary={project.summary}
              tags={project.tags}
              category={project.category}
              sourceCode={project.sourceCode}
              demoUrl={project.liveDemo}
              featured={project.featured}
              stars={project.stars}
              onViewDetails={() => {
                // Handle view details click if needed
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;