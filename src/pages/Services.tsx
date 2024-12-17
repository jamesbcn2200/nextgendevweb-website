import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-700">
              Custom web applications using modern technologies like React, TypeScript, and Node.js.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-4">SaaS Solutions</h2>
            <p className="text-gray-700">
              Scalable software-as-a-service platforms tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-4">AI Integration</h2>
            <p className="text-gray-700">
              Intelligent solutions incorporating machine learning and AI technologies.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-gray-700">
              Beautiful, intuitive user interfaces that enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;