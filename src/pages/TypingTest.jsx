// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const textSamples = [
//   "The quick brown fox jumps over the lazy dog. Keep practicing to improve your speed!",
//   "Coding is the closest thing to magic! Never stop learning and experimenting.",
//   "JavaScript is the language of the web. Master it to build amazing applications.",
//   "React makes UI development fun and efficient. Hooks make state management easier.",
// ];

// const TypingTest = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [startTime, setStartTime] = useState(null);
//   const [wpm, setWpm] = useState(0);
//   const [mistakes, setMistakes] = useState(0);
//   const [accuracy, setAccuracy] = useState(100);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * textSamples.length);
//     setCurrentText(textSamples[randomIndex]);
//   }, []);

//   const handleChange = (e) => {
//     if (!startTime) setStartTime(Date.now());
//     setInputValue(e.target.value);
    
//     let errors = 0;
//     for (let i = 0; i < e.target.value.length; i++) {
//       if (e.target.value[i] !== currentText[i]) errors++;
//     }
//     setMistakes(errors);

//     const totalChars = currentText.length;
//     setAccuracy(Math.max(0, Math.round(((totalChars - errors) / totalChars) * 100)));

//     if (e.target.value === currentText) {
//       const elapsedTime = (Date.now() - startTime) / 1000 / 60;
//       const words = currentText.split(" ").length;
//       setWpm(Math.round(words / elapsedTime));
//     }
//   };

//   const resetTest = () => {
//     const randomIndex = Math.floor(Math.random() * textSamples.length);
//     setCurrentText(textSamples[randomIndex]);
//     setInputValue("");
//     setStartTime(null);
//     setWpm(0);
//     setMistakes(0);
//     setAccuracy(100);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen  text-white">
//       <motion.div 
//         className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl w-[700px] text-center border border-white/20"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-2xl font-bold">Typing Test</h1>
//         <motion.p 
//           className="mt-4 p-6 bg-gray-800 text-green-400 rounded-md"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {currentText}
//         </motion.p>
        
//         <input 
//           type="text" 
//           className="mt-4 w-full p-2 text-white rounded-md outline-none border border-gray-400" 
//           value={inputValue} 
//           onChange={handleChange} 
//         />
        
//         <div className="mt-4 flex gap-20 text-lg justify-center">
//           <p>WPM: {wpm}</p>
//           <p>Mistakes: {mistakes}</p>
//           <p>Accuracy: {accuracy}%</p>
//         </div>

//         <button 
//           className="mt-4 bg-blue-500 text-white px-8 cursor-pointer py-2 rounded-md hover:bg-blue-600" 
//           onClick={resetTest}
//         >
//           Reset
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default TypingTest;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import netflix from "../assets/net.gif";
const textSamples = [
  "The quick brown fox jumps over the lazy dog. Keep practicing to improve your speed!",
  "Coding is the closest thing to magic! Never stop learning and experimenting.",
  "JavaScript is the language of the web. Master it to build amazing applications.",
  "React makes UI development fun and efficient. Hooks make state management easier.",
];

const TypingTest = () => {
  const [currentText, setCurrentText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textSamples.length);
    setCurrentText(textSamples[randomIndex]);
  }, []);

  const handleChange = (e) => {
    if (!startTime) setStartTime(Date.now());
    setInputValue(e.target.value);

    let errors = 0;
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i] !== currentText[i]) errors++;
    }
    setMistakes(errors);

    const totalChars = currentText.length;
    setAccuracy(Math.max(0, Math.round(((totalChars - errors) / totalChars) * 100)));

    if (e.target.value === currentText) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60;
      const words = currentText.split(" ").length;
      setWpm(Math.round(words / elapsedTime));
    }
  };

  const resetTest = () => {
    const randomIndex = Math.floor(Math.random() * textSamples.length);
    setCurrentText(textSamples[randomIndex]);
    setInputValue("");
    setStartTime(null);
    setWpm(0);
    setMistakes(0);
    setAccuracy(100);
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.div
        className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl w-full md:w-[700px] text-center border border-white/20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h1 className="text-2xl font-bold">Typing Test</h1>
        <motion.p
          className="mt-4 p-6 bg-gray-800 text-green-400 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          >
          {currentText}
        </motion.p>

        <input
          type="text"
          className="mt-4 w-full p-2 text-white rounded-md outline-none border border-gray-400"
          value={inputValue}
          onChange={handleChange}
          />

        <div className="mt-4 flex gap-20 text-lg justify-center">
          <p>WPM: {wpm}</p>
          <p>Mistakes: {mistakes}</p>
          <p>Accuracy: {accuracy}%</p>
        </div>

        <button
          className="mt-4 bg-blue-500 text-white px-8 cursor-pointer py-2 rounded-md hover:bg-blue-600"
          onClick={resetTest}
          >
          Reset
        </button>
      </motion.div>
    </div>
    <Card
        title="My Project Website"
        description="A sleek and modern Search GPT4 website built with React and TailwindCSS."
        image={netflix}
        github="https://github.com/Rakeshkolpur"
        demo="https://showlyy.vercel.app/gpt"
      />
          </>
  );
};

export default TypingTest;