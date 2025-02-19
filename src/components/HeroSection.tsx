

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";


function HeroSection() {


    return (

        <div>
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                            >
                                Boost Your{' '}
                                <motion.span
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
                                >
                                    Instagram Sales
                                </motion.span>{' '}
                                with Smart Automation
                            </motion.h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Instaxbot simplifies Instagram customer interactions with automated messaging
                                and seamless order management.
                            </p>
                        </div>

                        {/* Feature Pills */}


                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                <span className="flex items-center gap-2 group">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                <span className="flex items-center gap-2 group">
                                    sign up
                                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                            <button className="px-8 py-4  text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image/Video */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        {/* Pulsating Glow */}
                        <div className="absolute inset-0 w-[450px] h-[700px] rounded-3xl blur-xl bg-pink-500 opacity-30 animate-pulse"></div>

                        {/* Video Container */}
                        <div className="aspect-[4/3] w-[450px] h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-500 transform hover:scale-[1.02] transition-transform duration-300 relative">
                            {/* Video Element */}
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
