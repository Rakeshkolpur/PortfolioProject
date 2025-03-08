import React, { useEffect, useState } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer | React Specialist | Creative Coder";
  const typingSpeed = 100; // ms per character

  // Typing animation effect
  useEffect(() => {
    if (typedText === fullText) return;
    
    const timeout = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, fullText]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Static gradient background instead of video */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black"></div>
      
      {/* Star animation overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {/* Main heading with gradient effect */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            <span className="block">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text">
              Rakesh Kolpur
            </span>
          </h1>
          
          {/* Animated typing effect */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 h-8 md:h-10">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          
          {/* Brief introduction */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies.
            Turning ideas into interactive realities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4">
            <button 
              onClick={() => scrollToSection("projects")} 
              className="px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("feedback")} 
              className="px-8 py-3 rounded-full cursor-pointer bg-transparent border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;