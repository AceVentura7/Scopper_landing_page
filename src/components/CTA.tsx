import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Project Management?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join forward-thinking project managers and take your project initiation to the next level with Scopper.
        </p>
        <Button className="bg-yellow-400 text-secondary hover:bg-yellow-300">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default CTA;