import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
 
  const [activeRow, setActiveRow] = useState(null);
  

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "Digital Marketing Co.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOVvSqyMtj7rm9qvyVGOhJMISldcDIxOtgw&s",
      content: "Instaxbot has completely transformed how we handle customer messages. The automated responses are incredibly natural!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "E-commerce Owner",
      company: "StyleHub Fashion",
      image: "data:image/jpeg;base64,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",
      content: "The best investment for our Instagram business. We've seen a 60% increase in customer satisfaction.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Customer Service Director",
      company: "TechStart Solutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WnwoQG2049B3ZwRda-iq7tznBWSVsDyHnQ&s",
      content: "Incredibly intuitive and efficient. Our team loves the centralized inbox and AI responses.",
      rating: 5
    }
  ];
  const testimonialss = [
    {
      id: 1,
      name: "William",
      role: "Social Media Manager",
      company: "Digital Marketing Co.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOVvSqyMtj7rm9qvyVGOhJMISldcDIxOtgw&s",
      content: "Instaxbot has completely transformed how we handle customer messages. The automated responses are incredibly natural!",
      rating: 5
    },
    {
      id: 2,
      name: "Sophia",
      role: "E-commerce Owner",
      company: "StyleHub Fashion",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qYu2QIwlx4t6LLg58asxTp9VVowY-JrshA&s",
      content: "The best investment for our Instagram business. We've seen a 60% increase in customer satisfaction.",
      rating: 5
    },
    {
      id: 3,
      name: "Lucy",
      role: "Customer Service Director",
      company: "TechStart Solutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s",
      content: "Incredibly intuitive and efficient. Our team loves the centralized inbox and AI responses.",
      rating: 5
    }
  ];

  
  // Double the testimonials for each row
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonialss.reverse(), ...testimonialss.reverse()];

  return (
    <div className="w-full bg-gradient-to-b from-purple-50 to-pink-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          What Our Customers Say
          </h2>
          
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div 
            className="relative "
            onMouseEnter={() => setActiveRow(0)}
            onMouseLeave={() => setActiveRow(null)}
          >
            <div className="overflow-hidden rounded-xl ">
              <div 
                className={`flex gap-6 ${
                  activeRow === 0 ? 'pause-animation' : 'animate-scroll-left'
                }`}
              >
                {row1.map((testimonial, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="flex-shrink-0 w-[300px] md:w-[400px] transform transition-all duration-500 
                      hover:scale-105 hover:-translate-y-2 "
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border-2 border-purple-400 
                      hover:shadow-2xl hover:border-purple-300 transition-all duration-300 ">
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
                        transition-all duration-30 text-lg">
                        "{testimonial.content}"
                      </p>

                      <p className="text-purple-600 font-medium text-sm mb-4">
                        {testimonial.company}
                      </p>


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
                      hover:scale-105 hover:-translate-y-2 "
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border-2  border-purple-400 
                      hover:shadow-2xl hover:border-puple-300 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-400 
                              transition-all duration-300"
                          />
                          <div className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 
                            border-violet" />
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
                        transition-all duration-300 text-lg">
                        "{testimonial.content}"
                      </p>

                      <p className="text-purple-600 font-medium text-sm mb-4">
                        {testimonial.company}
                      </p>

                      
                      
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