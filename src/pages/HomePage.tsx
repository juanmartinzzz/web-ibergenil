import React from 'react';
import Hero from '../components/sections/Hero';
import MultiStepForm from '../components/form/MultiStepForm';
import CustomerGallery from '../components/sections/CustomerGallery';
import QuickQuiz from '../components/sections/QuickQuiz';
import Benefits from '../components/sections/Benefits';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <MultiStepForm />
          </div>
          <div className="lg:col-span-5">
            <QuickQuiz />
          </div>
        </div>
      </div>
      <Benefits />
      <CustomerGallery />
    </div>
  );
};

export default HomePage;