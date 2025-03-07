// import React from "react";
// import profile from "../assets/profile.jpg";
// import skillimage from "../assets/grid2.png";
// import grid3 from "../assets/grid3.png";
// import grid4 from "../assets/grid4.png";
// import earth from "../assets/000.png";
// const ProjectCards = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen cursor-pointer">
//       <div className="min-h-screen bg-transparent p-6 flex justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
//           {/* Card 1 - Profile */}
//           <div style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group">
//             <img
//               src={profile}
//               className="w-32 h-32 mt-12 mb-10 rounded-full border-4 border-blue-400 shadow-lg mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl mt-4 font-bold text-white relative">
//               Hi, I'm Rakesh ✋
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I'm a passionate Frontend Developer who loves crafting sleek,
//               user-friendly interfaces. With a deep love for JavaScript and
//               modern web technologies,I specialize in front-end development
//               using modern technologies like React, Tailwind CSS, and Next.js.
//               My expertise extends to JavaScript, where I build dynamic and
//               interactive web applications. I bring ideas to life with clean and
//               efficient code I have a strong foundation in HTML and CSS
//               JavaScript, TailwindCSS.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>

//           {/* Card 2 - Tech Stack */}
//           <div style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} className="relative p-6  rounded-lg  backdrop-blur-md shadow-md border border-white/20 group">
//             <img
//               src={skillimage}
//               className="w-56 h-56 rounded-full  shadow-lg mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl font-bold text-white relative">
//               Tech Stack
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I specialize in front-end development using modern technologies
//               like React, Tailwind CSS, and Next.js. My expertise extends to
//               JavaScript, where I build dynamic and interactive web
//               applications. Additionally, I have a strong foundation in HTML and
//               CSS JavaScript, TailwindCSS, ensuring well-structured and visually
//               appealing designs. Constantly exploring new frameworks and best
//               practices to deliver high-quality web experiences.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>

//           {/* Card 3 - Work & Availability */}
//           <div style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group">
//             <img
//               src={earth}
//               className="w-auto h-[50%] rounded-full mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl font-bold text-white relative">
//               Work & Availability
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I'm open to exciting opportunities and collaborations! Whether you
//               need a skilled front-end developer, want to discuss web projects,
//               or just have a tech-related question, feel free to reach out.
//               Let's build something amazing together! .
//             </p>
//             <button className="mt-4 px-4 py-2 rounded bg-green-500 text-white">
//               Contact Me
//             </button>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>

//           {/* Card 4 - Passion for Coding */}
//           <div style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group col-span-2">
//             <img src={grid3} className="w-auto h-[50%] mx-auto" alt="Profile" />
//             <h2 className="text-xl font-bold text-white relative mt-10">
//               My Passion for Coding
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I love solving problems and building things through code.
//               Programming isn't just my profession—it's my passion. I enjoy
//               exploring new technologies and enhancing my skills.Every challenge
//               I tackle strengthens my ability to create innovative and impactful
//               solutions.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//           {/* Card 5 - Passion for Coding */}
//           <div style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group">
//             <img src={grid4} className="w-auto h-[50%] mx-auto" alt="Profile" />
//             <h2 className="text-xl font-bold mt-10 text-white relative">
//               Connecting Me
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I find immense joy in solving problems through code and bringing
//               ideas to life. Exploring new technologies keeps me motivated and
//               constantly learning.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;
// import React from "react";
// import profile from "../assets/profile.jpg";
// import skillimage from "../assets/grid2.png";
// import grid3 from "../assets/grid3.png";
// import grid4 from "../assets/grid4.png";
// import earth from "../assets/000.png";

// const ProjectCards = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen cursor-pointer">
//       <div className="min-h-screen bg-transparent p-6 flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
//           {/* Card 1 - Profile */}
//           <div
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             className="relative p-6 rounded-lg backdrop-blur-md shadow-md border border-white/20 group"
//           >
//             <img
//               src={profile}
//               className="w-32 h-32 mt-12 mb-10 rounded-full border-4 border-blue-400 shadow-lg mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl mt-4 font-bold text-white relative">
//               Hi, I'm Rakesh ✋
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I'm a passionate Frontend Developer who loves crafting sleek,
//               user-friendly interfaces. With a deep love for JavaScript and
//               modern web technologies, I specialize in front-end development
//               using modern technologies like React, Tailwind CSS, and Next.js.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//           {/* Repeat for other cards */}
//           {/* Card 2 - Tech Stack */}{" "}
//           <div
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             className="relative p-6  rounded-lg  backdrop-blur-md shadow-md border border-white/20 group"
//           >
//             {" "}
//             <img
//               src={skillimage}
//               className="w-56 h-56 rounded-full  shadow-lg mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl font-bold text-white relative">
//               Tech Stack
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I specialize in front-end development using modern technologies
//               like React, Tailwind CSS, and Next.js. My expertise extends to
//               JavaScript, where I build dynamic and interactive web
//               applications. Additionally, I have a strong foundation in HTML and
//               CSS JavaScript, TailwindCSS, ensuring well-structured and visually
//               appealing designs. Constantly exploring new frameworks and best
//               practices to deliver high-quality web experiences.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//           {/* Card 3 - Work & Availability */}
//           <div
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group"
//           >
//             <img
//               src={earth}
//               className="w-auto h-[50%] rounded-full mx-auto"
//               alt="Profile"
//             />
//             <h2 className="text-xl font-bold text-white relative">
//               Work & Availability
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I'm open to exciting opportunities and collaborations! Whether you
//               need a skilled front-end developer, want to discuss web projects,
//               or just have a tech-related question, feel free to reach out.
//               Let's build something amazing together! .
//             </p>
//             <button className="mt-4 px-4 py-2 rounded bg-green-500 text-white">
//               Contact Me{" "}
//             </button>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />{" "}
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//           {/* Card 4 - Passion for Coding */}
//           <div
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group col-span-2"
//           >
//             <img src={grid3} className="w-auto h-[50%] mx-auto" alt="Profile" />
//             <h2 className="text-xl font-bold text-white relative mt-10">
//               My Passion for Coding
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I love solving problems and building things through code.
//               Programming isn't just my profession—it's my passion. I enjoy
//               exploring new technologies and enhancing my skills.Every challenge
//               I tackle strengthens my ability to create innovative and impactful
//               solutions.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//           {/* Card 5 - Passion for Coding */}
//           <div
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             className="relative p-6 rounded-lg  backdrop-blur-md shadow-md border border-white/20 group"
//           >
//             <img src={grid4} className="w-auto h-[50%] mx-auto" alt="Profile" />
//             <h2 className="text-xl font-bold mt-10 text-white relative">
//               {" "}
//               Connecting Me
//             </h2>
//             <p className="text-white/80 mt-2 text-justify">
//               I find immense joy in solving problems through code and bringing
//               ideas to life. Exploring new technologies keeps me motivated and
//               constantly learning.
//             </p>
//             <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
//             <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
//             <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
//             <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;

import React from "react";
import profile from "../assets/profile.jpg";
import skillimage from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import earth from "../assets/000.png";

const ProjectCards = () => {
  return (
    <div className="flex items-center justify-center min-h-screen cursor-pointer">
      <div className="min-h-screen bg-transparent p-4 sm:p-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
          {/* Card 1 - Profile */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            className="relative p-4 sm:p-6 rounded-lg backdrop-blur-md shadow-md border border-white/20 group"
          >
            <img
              src={profile}
              className="w-24 h-24 sm:w-32 sm:h-32 mt-8 sm:mt-12 mb-6 sm:mb-10 rounded-full border-4 border-blue-400 shadow-lg mx-auto"
              alt="Profile"
            />
            <h2 className="text-lg sm:text-xl mt-4 font-bold text-white relative">
              Hi, I'm Rakesh ✋
            </h2>
            <p className="text-white/80 mt-2 text-justify text-sm sm:text-base line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              I'm a passionate Frontend Developer who loves crafting sleek,
              user-friendly interfaces. With a deep love for JavaScript and
              modern web technologies, I specialize in front-end development
              using modern technologies like React, Tailwind CSS, and Next.js.
            </p>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
          </div>

          {/* Card 2 - Tech Stack */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            className="relative p-4 sm:p-6 rounded-lg backdrop-blur-md shadow-md border border-white/20 group"
          >
            <img
              src={skillimage}
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto"
              alt="Tech Stack"
            />
            <h2 className="text-lg sm:text-xl font-bold text-white relative">
              Tech Stack
            </h2>
            <p className="text-white/80 mt-2 text-justify text-sm sm:text-base line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              I specialize in front-end development using modern technologies
              like React, Tailwind CSS, and Next.js. My expertise extends to
              JavaScript, where I build dynamic and interactive web
              applications. Additionally, I have a strong foundation in HTML and
              CSS JavaScript, TailwindCSS, ensuring well-structured and visually
              appealing designs. Constantly exploring new frameworks and best
              practices to deliver high-quality web experiences.
            </p>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
          </div>

          {/* Card 3 - Work & Availability */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            className="relative p-4 sm:p-6 rounded-lg backdrop-blur-md items-center shadow-md border border-white/20 group"
          >
            <img
              src={earth}
              className="w-auto h-32 sm:h-40 rounded-full mx-auto"
              alt="Work & Availability"
            />
            <h2 className="text-lg sm:text-xl font-bold text-white relative">
              Work & Availability
            </h2>
            <p className="text-white/80 mt-2 text-justify text-sm sm:text-base line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              I'm open to exciting opportunities and collaborations! Whether you
              need a skilled front-end developer, want to discuss web projects,
              or just have a tech-related question, feel free to reach out.
              Let's build something amazing together!
            </p>
            <button className="mt-4 px-4 py-2 rounded bg-green-500 text-white text-sm sm:text-base">
              Contact Me
            </button>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
          </div>

          {/* Card 4 - Passion for Coding */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            className="relative p-4 sm:p-6 rounded-lg backdrop-blur-md shadow-md border border-white/20 group md:col-span-2"
          >
            <img
              src={grid3}
              className="w-auto h-32 sm:h-40 mx-auto"
              alt="Passion for Coding"
            />
            <h2 className="text-lg sm:text-xl font-bold text-white relative mt-6 sm:mt-10">
              My Passion for Coding
            </h2>
            <p className="text-white/80 mt-2 text-justify text-sm sm:text-base line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              I love solving problems and building things through code.
              Programming isn't just my profession—it's my passion. I enjoy
              exploring new technologies and enhancing my skills. Every challenge
              I tackle strengthens my ability to create innovative and impactful
              solutions.
            </p>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
          </div>

          {/* Card 5 - Connecting Me */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            className="relative p-4 sm:p-6 rounded-lg backdrop-blur-md shadow-md border border-white/20 group"
          >
            <img
              src={grid4}
              className="w-auto h-32 sm:h-40 mx-auto"
              alt="Connecting Me"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-6 sm:mt-10 text-white relative">
              Connecting Me
            </h2>
            <p className="text-white/80 mt-2 text-justify text-sm sm:text-base line-clamp-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
              I find immense joy in solving problems through code and bringing
              ideas to life. Exploring new technologies keeps me motivated and
              constantly learning.
            </p>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
