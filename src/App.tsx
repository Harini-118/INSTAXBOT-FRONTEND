import React, { useState } from 'react';
import { Menu, X,Zap } from 'lucide-react';
import HeroSection from "./components/HeroSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Zap size={28} className="text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                Instaxbot
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                About Us
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Pricing Plans
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Contact Us
              </a>
              <button className="px-6 py-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-gray-200 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing Plans
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-4 py-2 hover:bg-purple-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="w-full px-6 py-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors bg-purple-50 rounded-lg">
                  Login
                </button>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
<div><HeroSection /></div>


    </div>
  );
}

export default App;