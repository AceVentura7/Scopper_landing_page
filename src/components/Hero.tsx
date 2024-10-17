import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-background text-text py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          A Manager's Leap Towards Lightning Project Scoping
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Initiate with Confidence, Manage with Ease. Scopper is your cutting-edge project initiator tool designed to tackle the full spectrum of project initiation challenges.
        </p>
        <div className="space-x-4">
          <Button>Schedule a Demo</Button>
          <Button variant="secondary">Start Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;