
import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "React",
      description: "Build interactive UIs with the popular React library"
    },
    {
      title: "Tailwind CSS",
      description: "Style your app with utility-first CSS framework"
    },
    {
      title: "Components",
      description: "Use pre-built components to speed up development"
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Built With</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
