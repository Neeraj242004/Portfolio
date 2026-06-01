import React from "react";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 w-full bg-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 border border-purple-700 rounded-lg font-medium text-white hover:bg-purple-900 transition duration-300"
          >
            <span>View More Projects</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;