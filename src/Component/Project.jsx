import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa6'

const Projects = () => {
  return (
    <motion.div
     initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease:`easeOut`}}
    viewport={{once: false, amount:0.2}}
    id='projects'
    className="py-20 min-h-screen w-full bg-gradient-to-r ..."
    >
   <div className='container mx-auto px-6'>
     <h2 className='text-3xl font-bold text-center mb-4'>
        My 
        <span className='text-purple-500'>Projects</span>
     </h2>
     <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16 '>Selection of my recent work</p>
     {/* projects */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index)=>(
            <ProjectCard key={index} {...project} />
          ))}

         <div className="col-span-full flex justify-center mt-8">
        <a href="#"
           className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-700 rounded-lg font-medium hover:bg-purple-900 transition duration-300"
           >
            <span className="leading-none">View More Project</span>
          <FaArrowRight className="leading-none" />
        </a>
       </div>

     </div>
    </div>
    </motion.div>
  )
}

export default Projects