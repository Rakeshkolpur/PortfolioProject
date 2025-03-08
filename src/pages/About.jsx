import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "../styles/index.css";

// Skill data for the skills section
const skills = [
  { name: "React.js", level: 90, color: "#61DAFB" },
  { name: "JavaScript", level: 85, color: "#F7DF1E" },
  { name: "TypeScript", level: 75, color: "#3178C6" },
  { name: "Node.js", level: 80, color: "#539E43" },
  { name: "HTML/CSS", level: 90, color: "#E34F26" },
  { name: "TailwindCSS", level: 85, color: "#06B6D4" },
  { name: "Next.js", level: 70, color: "#000000" },
  { name: "MongoDB", level: 65, color: "#47A248" },
];

const About = () => {
  // Animation variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="text-white about-section min-h-screen flex flex-col justify-center py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* About Me Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block relative">
            <Typewriter
              words={["Hi, I am Rakesh ✋", "Welcome to My Portfolio! 🚀"]}
              loop={2}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </h2>
          
          <motion.p
            className="text-4xl md:text-6xl mt-8 font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            JavaScript Developer & UI Specialist
          </motion.p>
        </motion.div>

        {/* About Me Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">About Me</h3>
            <div className="space-y-4 text-gray-200">
              <p>
                I'm a passionate front-end developer with expertise in creating responsive, user-friendly web applications. 
                With a strong foundation in JavaScript and modern frameworks like React, I build interactive experiences that delight users.
              </p>
              <p>
                My journey in web development began over 3 years ago, and I've been constantly learning and adapting to new technologies since.
                I believe in clean code, attention to detail, and creating solutions that solve real problems.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#projects" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  View Projects
                </a>
                <a href="#feedback" className="px-6 py-2 rounded-full bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="glass-card overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="skill-item">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color} 0%, rgba(255,255,255,0.5) 100%)` 
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
