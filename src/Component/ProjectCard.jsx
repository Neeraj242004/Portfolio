import React from "react";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="bg-black rounded-2xl  overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />

      <div className="p-6">
        <h3 className="text-lg font-semibold  mb-2">
          {title}
        </h3>

        <p className="text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black rounded-full text-sm"
            >
              {item}
            </span>
          ))}
          </div>
          <div className="flex gap-2">
              <a href="#" className='flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
             <a href="#" className='flex-1 text-center px-4 py-2 border border-purple-700 rounded-lg font-medium hover:bg-purple-900 transition duration-300'>Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
