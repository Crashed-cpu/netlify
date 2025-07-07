import React from 'react';
import { Terminal, Workflow, Database, Bot, Zap } from 'lucide-react';

const Snapshots = () => {
  const snapshots = [
    {
      title: 'Talky Voice Pipeline',
      description: 'Real-time voice processing with AI integration',
      icon: Bot,
      visual: 'Voice Input → NLP Processing → Intent Recognition → Response Generation → Audio Output',
      color: 'cyan'
    },
    {
      title: 'uvpy Module Flow',
      description: 'Modular Python toolkit architecture',
      icon: Workflow,
      visual: 'Core Module → Utils → Automation → CLI → Integration → Output',
      color: 'amber'
    },
    {
      title: 'WhatsApp Automation',
      description: 'Message workflow automation chain',
      icon: Zap,
      visual: 'Trigger → Parse → Process → Queue → Execute → Respond → Log',
      color: 'emerald'
    },
    {
      title: 'Docker ML Pipeline',
      description: 'Containerized ML model deployment',
      icon: Database,
      visual: 'Model → Container → API → Load Balancer → Monitoring → Scaling',
      color: 'purple'
    },
    {
      title: 'Linux Toolkit CLI',
      description: 'System administration command suite',
      icon: Terminal,
      visual: 'Command → Parse → Validate → Execute → Monitor → Report → Cleanup',
      color: 'orange'
    }
  ];

  const colorMap = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400',
    amber: 'border-amber-500/30 hover:border-amber-500/50 text-amber-400',
    emerald: 'border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400',
    purple: 'border-purple-500/30 hover:border-purple-500/50 text-purple-400',
    orange: 'border-orange-500/30 hover:border-orange-500/50 text-orange-400'
  };

  return (
    <section id="snapshots" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Visuals
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visual storytelling that connects backend engineering with UI impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {snapshots.map((snapshot, index) => (
            <div
              key={snapshot.title}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 ${
                colorMap[snapshot.color as keyof typeof colorMap]
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gray-800/50 flex-shrink-0 ${
                  snapshot.color === 'cyan' ? 'text-cyan-400' : 
                  snapshot.color === 'amber' ? 'text-amber-400' : 
                  snapshot.color === 'emerald' ? 'text-emerald-400' : 
                  snapshot.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                }`}>
                  <snapshot.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {snapshot.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {snapshot.description}
                  </p>
                </div>
              </div>

              <div className="bg-gray-950/50 rounded-lg p-4 border border-gray-800 overflow-x-auto">
                <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-gray-300 min-w-max">
                  {snapshot.visual.split(' → ').map((step, stepIndex) => (
                    <React.Fragment key={stepIndex}>
                      <span 
                        className={`px-2 py-1 bg-gray-800/50 rounded border border-gray-700 whitespace-nowrap ${
                          snapshot.color === 'cyan' ? 'hover:border-cyan-500/50' : 
                          snapshot.color === 'amber' ? 'hover:border-amber-500/50' : 
                          snapshot.color === 'emerald' ? 'hover:border-emerald-500/50' : 
                          snapshot.color === 'purple' ? 'hover:border-purple-500/50' : 
                          'hover:border-orange-500/50'
                        } transition-all duration-200`}
                      >
                        {step}
                      </span>
                      {stepIndex < snapshot.visual.split(' → ').length - 1 && (
                        <span className="text-gray-500">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshots;