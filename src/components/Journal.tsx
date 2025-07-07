import React, { useState } from 'react';
import { BookOpen, FileText, Briefcase, Quote, GraduationCap } from 'lucide-react';

const Journal = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Logs', 'Essays', 'Internships', 'Quotes', 'Education'];

  const journalEntries = [
    {
      title: 'The Automation Mindset',
      summary: 'Why I believe automation should be the foundation, not an afterthought.',
      type: 'Essays',
      date: '2024-01-15',
      tags: ['Philosophy', 'Automation', 'Engineering']
    },
    {
      title: 'Building uvpy: Modular Python Design',
      summary: 'Technical deep-dive into creating reusable Python modules.',
      type: 'Logs',
      date: '2024-01-10',
      tags: ['Python', 'Design', 'Architecture']
    },
    {
      title: 'AI & Data Science Journey',
      summary: 'Currently pursuing B.Tech in AI & Data Science at Arya Group of Colleges.',
      type: 'Education',
      date: '2023-09-01',
      tags: ['Education', 'AI', 'Data Science']
    },
    {
      title: 'Voice AI Internship Experience',
      summary: 'Working on advanced voice processing systems and natural language interfaces.',
      type: 'Internships',
      date: '2024-01-05',
      tags: ['AI', 'Voice', 'Internship']
    },
    {
      title: 'Systems Thinking Quote',
      summary: '"Structured learning gave me the tools—self-learning gave me the vision."',
      type: 'Quotes',
      date: '2024-01-01',
      tags: ['Philosophy', 'Learning']
    },
    {
      title: 'Docker ML API Deployment',
      summary: 'Containerizing machine learning models for scalable deployment.',
      type: 'Logs',
      date: '2023-12-20',
      tags: ['Docker', 'ML', 'DevOps']
    },
    {
      title: 'WhatsApp Automation Insights',
      summary: 'Building intelligent message workflows that understand context.',
      type: 'Essays',
      date: '2023-12-15',
      tags: ['Automation', 'AI', 'Integration']
    }
  ];

  const filteredEntries = activeFilter === 'All' 
    ? journalEntries 
    : journalEntries.filter(entry => entry.type === activeFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Logs': return FileText;
      case 'Essays': return BookOpen;
      case 'Internships': return Briefcase;
      case 'Quotes': return Quote;
      case 'Education': return GraduationCap;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Logs': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Essays': return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Internships': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Quotes': return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'Education': return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <section id="journal" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thinking in Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A merged stream of structured thought, learning, and real-world application.
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

        {/* Education Highlight */}
        {(activeFilter === 'All' || activeFilter === 'Education') && (
          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={24} className="text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Current Education</h3>
            </div>
            <div className="text-gray-300">
              <p className="text-lg mb-2">
                <span className="font-semibold text-white">B.Tech in AI & Data Science</span> at Arya Group of Colleges
              </p>
              <p className="text-sm text-gray-400 mb-3">2023 - 2027</p>
              <p className="text-sm italic text-orange-300">
                "Structured learning gave me the tools—self-learning gave me the vision."
              </p>
            </div>
          </div>
        )}

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry, index) => {
            const IconComponent = getIcon(entry.type);
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(entry.type)}`}>
                    <IconComponent size={14} />
                    {entry.type}
                  </div>
                  <span className="text-xs text-gray-400">{entry.date}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {entry.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journal;