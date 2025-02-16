import React, { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, Share2, MessageCircle } from 'lucide-react';

const Testimonial = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeRow, setActiveRow] = useState(null);
  const [likes, setLikes] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "Digital Marketing Co.",
      image: "/api/placeholder/100/100",
      content: "Instaxbot has completely transformed how we handle customer messages. The automated responses are incredibly natural!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "E-commerce Owner",
      company: "StyleHub Fashion",
      image: "/api/placeholder/100/100",
      content: "The best investment for our Instagram business. We've seen a 60% increase in customer satisfaction.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Customer Service Director",
      company: "TechStart Solutions",
      image: "/api/placeholder/100/100",
      content: "Incredibly intuitive and efficient. Our team loves the centralized inbox and AI responses.",
      rating: 5
    }
  ];

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Double the testimonials for each row
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.reverse(), ...testimonials.reverse()];

  return (
    <div className="w-full bg-gradient-to-b from-purple-50 to-pink-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers using Instaxbot
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveRow(0)}
            onMouseLeave={() => setActiveRow(null)}
          >
            <div className="overflow-hidden rounded-xl">
              <div 
                className={`flex gap-6 ${
                  activeRow === 0 ? 'pause-animation' : 'animate-scroll-left'
                }`}
              >
                {row1.map((testimonial, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="flex-shrink-0 w-[300px] md:w-[400px] transform transition-all duration-500 
                      hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-purple-100 
                      hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-400 
                              transition-all duration-300"
                          />
                          <div className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 
                            border-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-800 hover:text-purple-600 
                            transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-700 italic mb-3 line-clamp-3 hover:line-clamp-none 
                        transition-all duration-300">
                        "{testimonial.content}"
                      </p>

                      <p className="text-purple-600 font-medium text-sm mb-4">
                        {testimonial.company}
                      </p>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <button 
                          onClick={() => handleLike(testimonial.id)}
                          className={`flex items-center gap-1 text-sm ${
                            likes[testimonial.id] ? 'text-red-500' : 'text-gray-500'
                          } hover:scale-110 transition-transform duration-300`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 
                          hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="w-4 h-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 
                          hover:scale-110 transition-transform duration-300">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveRow(1)}
            onMouseLeave={() => setActiveRow(null)}
          >
            <div className="overflow-hidden rounded-xl">
              <div 
                className={`flex gap-6 ${
                  activeRow === 1 ? 'pause-animation' : 'animate-scroll-right'
                }`}
              >
                {row2.map((testimonial, index) => (
                  <div 
                    key={`row2-${index}`}
                    className="flex-shrink-0 w-[300px] md:w-[400px] transform transition-all duration-500 
                      hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-purple-100 
                      hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-400 
                              transition-all duration-300"
                          />
                          <div className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 
                            border-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-800 hover:text-purple-600 
                            transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-700 italic mb-3 line-clamp-3 hover:line-clamp-none 
                        transition-all duration-300">
                        "{testimonial.content}"
                      </p>

                      <p className="text-purple-600 font-medium text-sm mb-4">
                        {testimonial.company}
                      </p>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <button 
                          onClick={() => handleLike(testimonial.id)}
                          className={`flex items-center gap-1 text-sm ${
                            likes[testimonial.id] ? 'text-red-500' : 'text-gray-500'
                          } hover:scale-110 transition-transform duration-300`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 
                          hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="w-4 h-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 
                          hover:scale-110 transition-transform duration-300">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;