import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Contact"
      className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Get In <span className="text-purple-600">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto mt-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer text-white"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-6">
                <FaMapMarkedAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Location
                </h3>

                <p className="text-gray-300">
                  Faridabad, Haryana, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-6">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Email
                </h3>

                <a
                  href="mailto:Neerajbhardwaj45d@gmail.com"
                  className="text-gray-300 hover:text-purple-500 transition"
                >
                  Neerajbhardwaj45d@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-6">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Phone
                </h3>

                <a
                  href="tel:+919599632398"
                  className="text-gray-300 hover:text-purple-500 transition"
                >
                  +91 9599632398
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Neeraj242004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-purple-600 transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/neerajreact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-blue-600 transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:Neerajbhardwaj45d@gmail.com"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-red-600 transition duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;