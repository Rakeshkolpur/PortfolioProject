import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; // For smooth animations
import "../styles/index.css";
const About = () => {
  return (
    <div className="text-white about-section text-3xl text-center items-center my-56 overflow-hidden">
      {/* Typing Animation for Name */}
      <h2 className="text-4xl font-bold">
        <Typewriter
          words={["Hi, I am Rakesh ✋", "Welcome to My Portfolio! 🚀"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Moving Rocket and Fire Icons */}
      <motion.p
        className="text-6xl mt-8 font-bold"
        animate={{
          x: [0, 10, -10, 0], // Moves left and right
          color: ["#ff0000", "#00ff00", "#0000ff"], // Changes color
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🚀 JavaScript Diehard Fan 🔥
      </motion.p>
      
    </div>
  );
};

export default About;
