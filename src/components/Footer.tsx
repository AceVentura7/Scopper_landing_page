import React from 'react';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-text py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Zap size={32} className="text-accent mr-2" />
            <span className="text-primary text-xl font-bold">Scopper</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-light hover:text-accent transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-light hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-light hover:text-accent transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-light">
          <p>&copy; 2024 Scopper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;