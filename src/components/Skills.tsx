import { useState } from 'react';
import { Server, Code, Zap, Brain, Palette, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('devops');

  const skillTabs = [
    {
      id: 'devops',
      label: 'DevOps & Infrastructure',
      icon: Server,
      skills: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'AWS', level: 'Intermediate', cert: 'AWS Certified (S3)' },
        { name: 'Linux', level: 'Advanced' },
        { name: 'CI/CD', level: 'Intermediate' },
        { name: 'Kubernetes', level: 'Learning' },
        { name: 'Terraform', level: 'Intermediate' }
      ]
    },
    {
      id: 'fullstack',
      label: 'Fullstack Development',
      icon: Code,
      skills: [
        { name: 'Python', level: 'Advanced', cert: 'HackerRank Python' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Next.js', level: 'Intermediate' }
      ]
    },
    {
      id: 'ai',
      label: 'AI & Data Science',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 'Advanced' },
        { name: 'SAS Viya', level: 'Certified', cert: 'SAS Viya Specialist' },
        { name: 'Data Analysis', level: 'Advanced', cert: 'IBM Data Analysis' },
        { name: 'NLP', level: 'Intermediate' },
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'Pandas', level: 'Advanced' }
      ]
    },
    {
      id: 'automation',
      label: 'Automation & Integration',
      icon: Zap,
      skills: [
        { name: 'API Development', level: 'Advanced' },
        { name: 'Workflow Automation', level: 'Advanced' },
        { name: 'Bot Development', level: 'Advanced' },
        { name: 'Twilio', level: 'Intermediate' },
        { name: 'Webhooks', level: 'Advanced' },
        { name: 'Streamlit', level: 'Intermediate' }
      ]
    },
    {
      id: 'design',
      label: 'UI/UX & Design',
      icon: Palette,
      skills: [
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Figma', level: 'Intermediate' },
        { name: 'System Design', level: 'Intermediate' },
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'User Experience', level: 'Intermediate' },
        { name: 'Design Systems', level: 'Learning' }
      ]
    }
  ];

  const activeSkillSet = skillTabs.find(tab => tab.id === activeTab);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'Intermediate': return 'bg-gradient-to-r from-amber-500 to-orange-500';
      case 'Learning': return 'bg-gradient-to-r from-blue-500 to-indigo-500';
      case 'Certified': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-800/[0.05] [mask-image:linear-gradient(0deg,transparent,black)] -z-10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-cyan-400 font-mono text-sm font-medium">// My Technical Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Systems of Capability
          </h2>
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto">
            Engineering domains organized by expertise level and practical application.
          </p>
        </div>

        {/* Skill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 shadow-lg shadow-cyan-500/20 transform -translate-y-0.5'
                  : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/60 hover:text-cyan-400 border border-gray-700/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon 
                  size={18} 
                  className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`} 
                />
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
              {activeTab === tab.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-cyan-500/10 hover:border-cyan-500/30">
          <div className="flex items-center gap-4 mb-8">
            {activeSkillSet && (
              <>
                <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                  <activeSkillSet.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {activeSkillSet.label}
                </h3>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeSkillSet?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-800/30 border border-gray-700/50 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/5 overflow-hidden"
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium text-lg group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span 
                      className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getLevelColor(skill.level)} shadow-md group-hover:scale-105 transition-transform duration-200`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  
                  {skill.cert && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                      <div className="text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <path d="M10 13l-1.5-1.5L7 15"></path>
                          <path d="M14 13l-1.5-1.5L11 15"></path>
                          <path d="M18 13l-1.5-1.5L15 15"></path>
                        </svg>
                      </div>
                      <span className="text-xs text-cyan-400 font-mono bg-cyan-900/30 px-2 py-1 rounded">
                        {skill.cert}
                      </span>
                    </div>
                  )}
                  
                  {/* Progress bar for skill level */}
                  <div className="mt-4 w-full bg-gray-700/50 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        skill.level === 'Advanced' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 w-5/6' :
                        skill.level === 'Intermediate' ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-2/3' :
                        skill.level === 'Learning' ? 'bg-gradient-to-r from-blue-400 to-indigo-500 w-1/3' :
                        'bg-gradient-to-r from-purple-500 to-pink-500 w-full' // For certified
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Let's Build Something Amazing</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;