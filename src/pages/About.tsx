import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About NextGenDevWeb</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 mb-4">
          NextGenDevWeb is a forward-thinking web development agency dedicated to creating innovative digital solutions. 
          We combine cutting-edge technologies with creative design to deliver exceptional web experiences.
        </p>
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower businesses through transformative web technologies, 
            leveraging the latest in AI, SaaS, and web development to drive digital success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;