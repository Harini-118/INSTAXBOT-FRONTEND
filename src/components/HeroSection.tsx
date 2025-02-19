import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

function HeroSection() {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 pt-16 lg:pt-32 pb-10 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Boost Your{" "}
              <motion.span
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 "
              >
                Instagram Sales
              </motion.span>{" "}
              with Smart Automation
            </motion.h1>

            <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 ">
              Instaxbot simplifies Instagram customer interactions with automated messaging
              and seamless order management.
            </p>

            {/* CTA Buttons Section */}
            <div ref={buttonRef} className="mt-2">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 font-rooftop">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-xl">
                  <span className="flex items-center justify-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-xl">
                  <span className="flex items-center justify-center gap-2 group">
                    Sign Up
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <button className="px-8 py-4 text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto text-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-none my-8 lg:my-0">
            <div className="absolute inset-0 w-full lg:w-[450px] h-[400px] lg:h-[700px] rounded-3xl blur-xl bg-pink-500 opacity-30 animate-pulse"></div>
            <div className="aspect-[4/3] w-full lg:w-[450px] h-[400px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-500 transform hover:scale-[1.02] transition-transform duration-300 relative">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
