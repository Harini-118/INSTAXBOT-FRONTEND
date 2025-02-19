import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="bg-white py-16">
      {/* Main About Us Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-purple-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>

        {/* Company Information */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-purple-800">Our Company</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Instaxbot, we're revolutionizing how businesses manage their social media presence. 
              Founded in 2024, we've made it our mission to simplify Instagram automation while 
              maintaining authenticity and compliance with platform guidelines.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of experts combines deep social media knowledge with cutting-edge AI technology 
              to deliver a solution that helps businesses grow their Instagram presence efficiently 
              and effectively.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h4>
              <p className="text-gray-700 text-lg">
                To empower businesses of all sizes with intelligent automation tools that make 
                social media management effortless, while fostering genuine engagement and 
                sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Why We Built Instaxbot */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">Why We Built Instaxbot ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-purple-800 mb-3">Time-Saving</h4>
              <p className="text-gray-700">
                We recognized that businesses spend countless hours managing their Instagram presence 
                manually, taking time away from core business activities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-purple-800 mb-3">Consistency</h4>
              <p className="text-gray-700">
                Maintaining consistent engagement and posting schedules is crucial for growth, 
                but challenging to execute manually across time zones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold text-purple-800 mb-3">Smart Growth</h4>
              <p className="text-gray-700">
                We wanted to create a tool that not only automates tasks but does so intelligently, 
                helping businesses grow their presence organically and authentically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;