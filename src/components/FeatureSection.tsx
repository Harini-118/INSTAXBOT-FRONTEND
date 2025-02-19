import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const EnhancedFeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const slideRefs = useRef([]);

  const features = [
    { title: "Automated Message Replies", description: "Instantly respond to customer inquiries with AI-powered auto-replies", icon: "✉️", borderColor: "border-pink-300" },
    { title: "Seamless Message Management", description: "Organize, track, and manage all conversations from a single dashboard", icon: "📊", borderColor: "border-purple-300" },
    { title: "Centralized CRM Inbox", description: "Efficiently handle Instagram messages within an integrated system", icon: "📱", borderColor: "border-indigo-300" },
    { title: "Smart Workflow Automation", description: "Automate repetitive tasks to improve response time and efficiency", icon: "⚡", borderColor: "border-blue-300" },
    { title: "Real-Time Message Retrieval", description: "Instantly fetch and display messages within the app for quick responses", icon: "🔄", borderColor: "border-violet-300" }
  ];

  useGSAP(() => {
    gsap.fromTo(
      slideRefs.current[currentSlide],
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);

  return (
    <div className="w-full max-w-4xl mx-auto relative overflow-hidden p-2 sm:p-4">
      <div
        className="relative min-h-[320px] sm:min-h-[420px] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute w-full transition-all duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-0"
            }`}
          >
            <div className="mx-2 sm:mx-6">
              <div
                className={`bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5 sm:p-8 shadow-lg border-2 ${feature.borderColor} h-64 sm:h-80 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md group`}
              >
                <div className="text-4xl sm:text-7xl mb-5 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-2xl sm:text-xl font-bold mb-3 text-purple-600 text-center">
                  {feature.title}
                </h3>
                <p className="text-center sm:text-xl text-sm sm:text-base text-gray-600 px-4 sm:px-6 max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors border border-purple-200 hover:border-purple-300 z-30"
      >
        <ChevronLeft className="w-7 h-7 text-purple-500" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors border border-purple-200 hover:border-purple-300 z-30"
      >
        <ChevronRight className="w-7 h-7 text-purple-500" />
      </button>

      {/* Animated Progress Dots */}
      <div className="flex justify-center mt-5 gap-3 z-30 relative">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-purple-500 scale-125 shadow-lg" : "bg-purple-200 hover:bg-purple-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedFeatureSlider;
