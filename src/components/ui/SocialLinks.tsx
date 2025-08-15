import React from 'react';
import { Github, Linkedin, Twitter, LucideProps } from 'lucide-react';

interface SocialLink {
  icon: React.ComponentType<LucideProps>;
  href: string;
  label: string;
}

const defaultSocialLinks: SocialLink[] = [
  { 
    icon: Github, 
    href: 'https://github.com/Crashed-cpu', 
    label: 'GitHub' 
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/the-ayush-factor/', 
    label: 'LinkedIn' 
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/Ayushsa82728134', 
    label: 'Twitter' 
  }
];

interface SocialLinksProps {
  links?: SocialLink[];
  iconSize?: number;
  className?: string;
  itemClassName?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links = defaultSocialLinks,
  iconSize = 22,
  className = 'flex space-x-6',
  itemClassName = 'p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-1 group'
}) => {
  return (
    <div className={className}>
      {links.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClassName}
          aria-label={social.label}
        >
          <social.icon 
            size={iconSize}
            className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
