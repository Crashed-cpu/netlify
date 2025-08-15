import React from 'react';
import { ExternalLink, Github, Star, Eye, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  summary: string;
  tags: string[];
  category: string;
  sourceCode: string;
  demoUrl?: string;
  featured?: boolean;
  stars: number;
  onViewDetails?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  tags,
  sourceCode,
  demoUrl,
  featured = false,
  stars,
  onViewDetails
}) => {
  return (
    <div className="group relative h-full">
      <div 
        className={`h-full relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
          featured 
            ? 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10' 
            : 'border-gray-700 hover:border-gray-600 hover:shadow-gray-900/20'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (x - centerX) / 20;
          const rotateX = (centerY - y) / 20;
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        
        {featured && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/20 z-10">
            <Star size={12} className="fill-yellow-300 text-yellow-300" />
            <span>Featured</span>
          </div>
        )}
        
        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button 
            onClick={onViewDetails}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Eye size={16} />
            <span>View Details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="space-y-4 h-full flex flex-col">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {summary}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded border border-gray-700 group-hover:border-cyan-500/30 group-hover:text-cyan-400 group-hover:bg-gray-800 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-cyan-400 group-hover:scale-110 transition-transform duration-300">
            <Star size={14} className="fill-cyan-400/20 text-cyan-400" />
            <span>{stars}</span>
          </div>
          
          <div className="flex gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 hover:bg-gray-700/80 rounded-lg border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800/50 hover:bg-gray-700/80 rounded-lg border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
