import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'


const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease:`easeOut`}}
    viewport={{once: false, amount:0.2}}
    id='Skills'
    className='py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
        <div className='container mx-0 px-6 '>
           <h2 className='text-3xl font-bold text-center mb-4'>My
            <span className='text-purple-700'>Skills</span></h2>
           <p className='text-gray-500 text-center max-w-2xl mx-auto mb-16'>Technologies I work with to bring ideas to life</p>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
              {
                skills.map((skills,index)=>(
                    <div key={index} className='bg-black rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer'>
                         <div className='flex items-center mb-4'>
                            <skills.icon className='w-12 h-12 text-purple-600 mr-6'/>
                            <h3 className='text-xl font-semibold'>{skills.title}</h3>
                         </div>
                            <p className='text-gray-600 mb-4'>{skills.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {skills.tags.map((tech)=>(
                                    <span key={tech} className='px-3 py-1 bg-black rounded-full text-sm'>{tech}</span>
                                ))}
                            </div>
                    </div>
                ))
              }
           </div>
        </div>

    </motion.div>
  )
}

export default Skills