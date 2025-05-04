
import React from 'react';
import { Button } from "@/components/ui/button";
import WelcomeHero from '../components/WelcomeHero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <WelcomeHero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
