import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Austin<span className="text-blue-600">Warren</span>
          </a>
          <p className="text-sm text-slate-500 mt-2">
            © {year} Austin Warren. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/austinwarren" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/austin-warren-081ab4211/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:austingw2020@gmail.com" className="hover:text-blue-600 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-slate-500 font-medium">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};
