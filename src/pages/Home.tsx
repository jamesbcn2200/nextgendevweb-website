import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to NextGenDevWeb</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl text-gray-700 mb-4">
          We are a cutting-edge web development agency specializing in modern, scalable solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold text-lg">SaaS Solutions</h2>
            <p>Custom software as a service development</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold text-lg">AI Integration</h2>
            <p>Intelligent solutions powered by AI</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold text-lg">Web Development</h2>
            <p>Modern, responsive web applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;