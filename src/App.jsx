// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/FeedbackForm";
// import Projects from "./pages/Projects";
// import Footer from "./components/Footer";

// // This component wraps all pages and includes Navbar
// const AppLayout = () => {

//   return (
//     <div>
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   );
// };

// // Define Routes
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />, // Navbar is always present
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/projects", element: <Projects /> },
//     ],
//   },
// ]);

// export default function AppRouter() {
//   return <RouterProvider router={appRouter} />;
// }
// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import TypingTest from "./pages/TypingTest";
// import FeedbackForm from "./pages/FeedbackForm";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div>
//       {/* Sticky Navbar */}
//       <Navbar />
//       {/* Sections with IDs for Smooth Scrolling */}
//       <section id="home">
//         <Home />   
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="typing-test">
//         <TypingTest />
//       </section>
//       <section id="feedback">
//         <FeedbackForm />
//       </section>

//       {/* Footer at the Bottom */}
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TypingTest from "./pages/TypingTest";
import FeedbackForm from "./pages/FeedbackForm";
import Footer from "./components/Footer";

const App = () => {
  // Smooth scrolling effect for the entire app
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Clean up event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="relative bg-black text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      {/* Main Content Sections */}
      <main>
        <section id="about" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20 -z-10"></div>
          <About />
        </section>
        
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 -z-10"></div>
          <Projects />
        </section>
        
        <section id="typing-test" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-indigo-900/20 -z-10"></div>
          <TypingTest />
        </section>
        
        <section id="feedback" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black -z-10"></div>
          <FeedbackForm />
        </section>
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default App;