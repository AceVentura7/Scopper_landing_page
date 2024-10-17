import React from 'react';
import { Zap, Clock, Users, DollarSign, Layers, GitBranch } from 'lucide-react';

const features = [
  {
    icon: <Zap size={48} className="text-accent" />,
    title: 'Scope Estimator',
    description: 'Align project requirements with client expectations for precise scope estimation.',
  },
  {
    icon: <Clock size={48} className="text-accent" />,
    title: 'Time & Resource Planning',
    description: 'Ensure the right team and resources are in place at the right time.',
  },
  {
    icon: <DollarSign size={48} className="text-accent" />,
    title: 'Budget Estimates',
    description: 'Real-time budget forecasting and tracking to maintain financial control.',
  },
  {
    icon: <Layers size={48} className="text-accent" />,
    title: 'SDLC Optimization',
    description: 'Support for all phases from project initiation to testing and deployment.',
  },
  {
    icon: <GitBranch size={48} className="text-accent" />,
    title: 'Agile-Driven',
    description: 'Built-in Scrum boards and support for Agile methodologies.',
  },
  {
    icon: <Users size={48} className="text-accent" />,
    title: 'Client Requirements',
    description: 'Centralized repository for capturing and managing client project requirements.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gray-dark py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;