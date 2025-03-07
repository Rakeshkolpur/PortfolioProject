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
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TypingTest from "./pages/TypingTest";
import FeedbackForm from "./pages/FeedbackForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Video Background */}
      <Home />

      {/* Sections with IDs for Smooth Scrolling */}
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="typing-test">
        <TypingTest />
      </section>
      <section id="feedback">
        <FeedbackForm />
      </section>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default App;