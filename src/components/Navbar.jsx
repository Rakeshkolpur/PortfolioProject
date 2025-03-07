// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/index.css"; // Ensure CSS is imported

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Work", path: "/contact" },
//   { name: "Contact", path: "/projects" },
// ];

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-16 py-6 bg-transparent">
//       {/* Logo */}
//       <div className="text-xl font-semibold">
//         <Link to="/" className="text-white hover:text-green-500 transition">
//           Rakesh | Frontend Developer
//         </Link>
//       </div>

//       {/* Navigation */}
//       <ul className="flex space-x-6 text-lg">
//         {navLinks.map((link, index) => (
//           <li key={index} className={`relative group ${index === 3 ? 'w-40' : ''}`}>
//             <Link
//               to={link.path}
//               className="relative px-4 py-2 font-medium text-white transition-colors duration-300 hover:text-indigo-300"
//             >
//               {link.name}

//               {/* TOP BORDER */}
//               <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

//               {/* RIGHT BORDER */}
//               <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

//               {/* BOTTOM BORDER */}
//               <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

//               {/* LEFT BORDER */}
//               <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // Close the menu after clicking a link
//   };

//   return (
//     <nav className=" text-white fixed top-6 left-0 w-full z-50 shadow-lg">
//       <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
//         <h1 className="text-2xl font-bold">Rakesh / Front-End Devloper</h1>
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <li className="cursor-pointer font-bold text-[16px] hover:text-blue-400" onClick={() => scrollToSection("about")}>Home</li>
//           <li className="cursor-pointer font-bold text-[16px] hover:text-blue-400" onClick={() => scrollToSection("about")}>About</li>
//           <li className="cursor-pointer font-bold text-[16px] hover:text-blue-400" onClick={() => scrollToSection("projects")}>Projects</li>
//           <li className="cursor-pointer font-bold text-[16px] hover:text-blue-400" onClick={() => scrollToSection("typing-test")}>Typing Test</li>
//           <li className="cursor-pointer font-bold text-[16px] hover:text-blue-400" onClick={() => scrollToSection("feedback")}>Feedback</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="text-white fixed top-2 left-0 w-full z-50 shadow-lg">
      <div className="max-w-[85%] mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold hover:text-green-600 cursor-pointer">Rakesh / Front-End Devloper</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul  className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`} >
          <li
            className="relative p-4 cursor-pointer font-bold text-[16px]  hover:text-green-600 group"
            onClick={() => scrollToSection("about")}
          >
            Home
            {/* Animation for four sides */}
            <span className="absolute   left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full"></span>
            <span className="absolute  right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full"></span>
            <span className="absolute  bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full"></span>
            <span className="absolute  bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full"></span>
          </li>
          <li
            className="relative p-4 hover:text-green-600  cursor-pointer font-bold text-[16px] group"
            onClick={() => scrollToSection("about")}
          >
            About
            {/* Animation for four sides */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full"></span>
          </li>
          <li
            className="relative p-4 hover:text-green-600  cursor-pointer font-bold text-[16px] group"
            onClick={() => scrollToSection("projects")}
          >
            Projects
            {/* Animation for four sides */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full"></span>
          </li>
          <li
            className="relative p-4 hover:text-green-600  cursor-pointer font-bold text-[16px] group"
            onClick={() => scrollToSection("typing-test")}
          >
            Typing Test
            {/* Animation for four sides */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full"></span>
          </li>
          <li
            className="relative p-4 hover:text-green-600  cursor-pointer font-bold text-[16px] group"
            onClick={() => scrollToSection("feedback")}
          >
            Feedback
            {/* Animation for four sides */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-400 transition-all duration-100 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-400 transition-all delay-100 duration-100 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-400 transition-all delay-200 duration-100 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-400 transition-all delay-300 duration-100 group-hover:h-full"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
