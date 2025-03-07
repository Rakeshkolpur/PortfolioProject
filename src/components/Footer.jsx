// const Footer = () => {
//     return (
//       <footer className="bg-gray-900 text-white py-6 mt-6 h-30">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">Rakesh</h2>
//             <p className="text-gray-400">Building the future, one project at a time.</p>
//           </div>
  
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="https://github.com/" target="_blank" className="hover:text-blue-400">GitHub</a>
//             <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
//             <a href="https://twitter.com/" target="_blank" className="hover:text-blue-400">Twitter</a>
//           </div>
  
//           <p className="text-gray-500 text-sm mt-4 md:mt-0">
//             © {new Date().getFullYear()} Rakesh. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-6 h-30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Rakesh</h2>
          <p className="text-gray-400">Building the future, one project at a time.</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" className="hover:text-blue-400">Twitter</a>
        </div>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Rakesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;