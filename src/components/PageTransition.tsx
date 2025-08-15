import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TechLogos from './TechLogos';

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number>();
  const hasShownLoader = useRef<boolean>(false);

  useEffect(() => {
    // Check if page is already loaded (cached)
    const isCached = document.readyState === 'complete' || document.readyState === 'interactive';
    
    if (isCached && sessionStorage.getItem('hasLoadedBefore') === 'true') {
      setIsVisible(false);
      setIsLoading(false);
      return;
    }

    // Start progress animation with minimum duration
    const startTime = performance.now();
    const minDuration = 2500; // 2.5 seconds minimum duration
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      // Ensure animation runs for at least minDuration
      const progressDuration = Math.max(elapsed, minDuration);
      const newProgress = Math.min(elapsed / progressDuration, 1);
      
      setProgress(newProgress * 100);
      progressRef.current = newProgress * 100;
      
      if (elapsed < minDuration) {
        rafRef.current = requestAnimationFrame(animate);
      } else if (progressRef.current < 100) {
        // If we hit minDuration but progress isn't complete, quickly finish it
        setProgress(100);
        progressRef.current = 100;
        setIsLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
        setTimeout(() => setIsVisible(false), 500);
      } else if (newProgress >= 1) {
        setIsLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
        setTimeout(() => setIsVisible(false), 500);
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    // Only show loader if content isn't already loaded
    if (document.readyState === 'complete') {
      setIsVisible(false);
      setIsLoading(false);
      return;
    }
    
    rafRef.current = requestAnimationFrame(animate);
    
    const handleLoad = () => {
      setIsLoading(false);
      sessionStorage.setItem('hasLoadedBefore', 'true');
      setTimeout(() => setIsVisible(false), 200);
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950/90 backdrop-blur transition-all duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <TechLogos />
      <motion.div 
        className="relative w-32 h-32 mb-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
        
        {/* Animated progress ring */}
        <div 
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            background: `conic-gradient(
              from 0deg,
              #06b6d4 0%,
              #06b6d4 ${progress}%,
              transparent ${progress}%,
              transparent 100%
            )`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        ></div>
        
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Center logo/icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold text-cyan-400 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <motion.span 
              className="inline-block text-cyan-400"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >A</motion.span>
            <motion.span 
              className="inline-block text-cyan-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
            >S</motion.span>
          </div>
        </div>
      </motion.div>
      
      {/* Loading text with progress */}
      <div className="text-center">
        <div className="text-cyan-300 text-sm mb-2 font-mono tracking-wider">
          {Math.min(Math.round(progress), 100)}%
        </div>
        <div className="w-32 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
