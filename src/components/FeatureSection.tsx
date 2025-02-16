import React, { useState, useCallback } from 'react';
import { MessageSquareMore, LayoutDashboard, Inbox, Workflow, Timer } from 'lucide-react';

const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    {
      icon: <MessageSquareMore className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Automated Message Replies",
      description: "Instantly respond to customer inquiries with AI-powered auto-replies"
    },
    {
      icon: <LayoutDashboard className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Seamless Message Management",
      description: "Organize, track, and manage all conversations from a single dashboard"
    },
    {
      icon: <Inbox className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Centralized CRM Inbox",
      description: "Efficiently handle Instagram messages within an integrated system"
    },
    {
      icon: <Workflow className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks to improve response time and efficiency"
    },
    {
      icon: <Timer className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Real-Time Message Retrieval",
      description: "Instantly fetch and display messages within the app for quick responses"
    }
  ];

  const handleHover = useCallback((index) => {
    setIsHovering(true);
    setActiveIndex(index);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Features & Benefits
      </h2>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                index === activeIndex 
                  ? 'scale-105 z-10' 
                  : 'scale-95 opacity-70'
              }`}
              onMouseEnter={() => handleHover(index)}
            >
              <div 
                className={`rounded-xl p-6 text-center bg-white shadow-lg 
                  backdrop-blur-sm cursor-pointer h-full
                  transform transition-all duration-300
                  hover:shadow-xl hover:bg-gradient-to-b hover:from-purple-50 hover:to-pink-50
                  ${index === activeIndex ? 'border-2 border-purple-400' : 'border border-gray-200'}
                `}
              >
                <div className={`flex justify-center transition-transform duration-300 ${
                  index === activeIndex ? 'scale-110' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className={`text-gray-600 transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-80'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-purple-600 w-6' 
                  : 'bg-gray-300 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;