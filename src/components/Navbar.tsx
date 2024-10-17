import React from 'react';
import { Zap } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Zap size={32} className="text-accent mr-2" />
          <span className="text-primary text-xl font-bold">Scopper</span>
        </div>
        <div className="space-x-6">
          <a href="#features" className="text-text hover:text-accent transition-colors">Features</a>
          <a href="#benefits" className="text-text hover:text-accent transition-colors">Benefits</a>
          <a href="#contact" className="text-text hover:text-accent transition-colors">Contact</a>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;