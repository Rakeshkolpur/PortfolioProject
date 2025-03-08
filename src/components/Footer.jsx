import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white py-12 overflow-hidden">
      {/* Glass-style background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
      
      {/* Wave decoration */}
      <div className="absolute top-0 inset-x-0 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="rgba(255,255,255,0.06)" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,154.7C672,160,768,224,864,218.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">R</span>akesh
              <span className="text-purple-400">.dev</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting beautiful, responsive web experiences with modern technologies.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Rakeshkolpur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:text-purple-400"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/krakeshfullstack/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:text-purple-400"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/rakeshkolpur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:text-purple-400"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:mju646139@gmail.com" 
                className="bg-gray-700 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:text-purple-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#typing-test" className="text-gray-300 hover:text-white transition-colors duration-300">Typing Test</a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Have a project in mind or just want to say hello? 
              I'm always open to discussing new projects and opportunities.
            </p>
            <a 
              href="#feedback" 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rakesh Kolpur. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;