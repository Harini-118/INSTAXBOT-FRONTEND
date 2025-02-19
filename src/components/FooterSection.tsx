import React from 'react';
import { Check, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';



const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-4 md:mb-6 text-gray-800">Tech Vaseegrah</h3>
            <p className="text-gray-600 mb-4 md:mb-6">
           Transforming Small Busiiness into Bizz
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-white p-2 rounded-full hover:bg-pink-50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-pink-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 md:mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'pricing plans', 'testimonial', 'Contact us', 'sign up'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 group justify-center sm:justify-start"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 md:mb-6 text-gray-800">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Digital Marketing',
                'Content Creation',
                'website ceation',
                'video editing',
                'logo creation'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 group justify-center sm:justify-start"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 md:mb-6 text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-pink-400" />
                <span>#9 Vijaya Nagar Srinivasapuram Post Thanjavur, TN 613009</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
                <Phone className="w-5 h-5 flex-shrink-0 text-pink-400" />
                <span>+91 85240 89733</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
                <Mail className="w-5 h-5 flex-shrink-0 text-pink-400" />
                <span>techvaseegrah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-16 pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2025 Tech Vaseegrah. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export  default FooterSection;