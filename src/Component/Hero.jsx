import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-40 md:pt-28 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi,I'm <span className="text-purple-600">Neeraj Kumar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-gray-200 typewriter">
           React.js Frontend Developer
            </h2>

          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
            Frontend Developer specializing in React.js, JavaScript,
            Tailwind CSS, API Integration and Responsive Web Applications.
            Passionate about building modern, user-friendly and scalable web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-center"
            >
            View Projects
            </a>

            <a
              href="#Contact"
              className="px-6 py-3 border border-purple-700 rounded-lg font-medium hover:bg-purple-700/20 transition duration-300 text-center"
            >
            Contact Me
            </a>

            <a
              href="/Neeraj_kumar_ReactJs_Frontend_Developer.pdf"
              download
              className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition duration-300 text-center"
            >
            Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
            <div className="bg-black/40 rounded-xl p-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-purple-500">
                3+
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-purple-500">
                100%
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Responsive
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-purple-500">
                React
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 blur-2xl opacity-40"></div>

            <img
              src="/Neerajbhardwaj.jpg"
              alt="Neeraj Kumar"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-600 shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;