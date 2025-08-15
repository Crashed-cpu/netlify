import { motion } from 'framer-motion';
import { SiLinux, SiKubernetes, SiDocker, SiJenkins, SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const TechLogos = () => {
  const logos = [
    { icon: <SiLinux />, color: 'text-gray-300', size: 24 },
    { icon: <SiKubernetes />, color: 'text-blue-400', size: 28 },
    { icon: <SiDocker />, color: 'text-blue-400', size: 28 },
    { icon: <SiJenkins />, color: 'text-red-400', size: 24 },
    { icon: <SiMongodb />, color: 'text-green-400', size: 28 },
    { icon: <SiExpress />, color: 'text-yellow-400', size: 24 },
    { icon: <SiReact />, color: 'text-cyan-400', size: 28 },
    { icon: <SiNodedotjs />, color: 'text-green-500', size: 28 },
    { icon: <FaAws />, color: 'text-yellow-500', size: 28 },
  ];

  const positions = [
    { top: '5%', left: '5%' },
    { top: '10%', right: '10%' },
    { bottom: '15%', left: '15%' },
    { top: '20%', right: '20%' },
    { bottom: '25%', left: '25%' },
    { top: '30%', right: '10%' },
    { bottom: '35%', left: '15%' },
    { top: '40%', right: '20%' },
    { bottom: '45%', left: '10%' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg"></div>
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className={`absolute ${logo.color} opacity-0`}
          style={{
            ...positions[index % positions.length],
            width: `${logo.size}px`,
            height: `${logo.size}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.1, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 0.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default TechLogos;
