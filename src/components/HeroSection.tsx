import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-light-blue-100 via-mint-50 to-light-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue-500 to-mint-500">Erasmus+</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
            Discover new opportunities in European education and cultural exchange. 
            Join a community of students who are changing their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 hover:from-light-blue-600 hover:to-light-blue-700 text-white px-8 py-3">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-light-blue-300 text-light-blue-600 hover:bg-light-blue-50 px-8 py-3">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
