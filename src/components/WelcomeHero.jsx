
import React from 'react';
import { Button } from "@/components/ui/button";

const WelcomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to Your New App
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
        Start building something amazing with this clean, modern React application template.
      </p>
      <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
        Get Started
      </Button>
    </div>
  );
};

export default WelcomeHero;
