import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ title, description, image, github, demo }) => {
  return (
    <div className="relative mx-auto w-[80%] group bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-md border border-white/20 hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-1/1 h-auto max-h-10/12 object-cover  rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mt-4">{title}</h3>

      {/* Description */}
      <p className="text-white/80 mt-2 text-sm">{description}</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            <FaExternalLinkAlt className="text-lg" /> Live Demo
          </a>
        )}
      </div>

      {/* Hover Effect Border Animation */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-200 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-200 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-200 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-200 group-hover:h-full" />
    </div>
  );
};

export default Card;
