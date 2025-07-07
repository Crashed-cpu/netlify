import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Animated Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '3s'
        }} />
        <div className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-pulse" style={{
          top: '60%',
          left: '80%',
          animationDelay: '1s',
          animationDuration: '2s'
        }} />
        <div className="absolute w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-pulse" style={{
          top: '40%',
          left: '70%',
          animationDelay: '2s',
          animationDuration: '4s'
        }} />
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{
          top: '80%',
          left: '30%',
          animationDelay: '0.5s',
          animationDuration: '2.5s'
        }} />
        <div className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-pulse" style={{
          top: '30%',
          left: '50%',
          animationDelay: '1.5s',
          animationDuration: '3.5s'
        }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
    </div>
  );
};

export default Background;