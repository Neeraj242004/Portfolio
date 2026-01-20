import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo } from '../assets/assets'
import { div } from 'framer-motion/client'


const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:`easeOut`}}
    viewport={{once: true}}
    id='About'
    className='py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1z]'
    >
        <div className='container mx-0 px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple-500'>Me</span></h2>
            <p className='text-gray-500 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

            <div className='flex flex-col md:flex-row items-center gap-12'>
               <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                   <motion.img 
                   initial={{opacity:0, y:50}}
                   whileInView={{opacity:1, y:0}}
                   transition={{duration:0.9, ease:`easeOut`}}
                   viewport={{once: false, amount:0.2}}
                   className='w-full h-full object-cover'
                   src="/Neerajbhardwaj.jpg" alt="Profile" />
               </div>
               <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:`easeOut`}}
                viewport={{once: false, amount:0.2}}
                className='md:w-1/2 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1z]'>

                <div className='rounded-2xl p-8'>
                     <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                     <p className='text-gray-300 mb-6'>I’m Neeraj — a passionate full-stack developer at the beginning of my professional journey.I started exploring web development out of curiosity, and soon it became something I truly enjoy.I learned HTML, CSS, JavaScript, React, and modern tools that helped me build clean and responsive web applications. </p>
                     <p className='text-gray-300 mb-12'>I believe in learning by doing, so I’ve worked on multiple personal projects that strengthened my problem-solving skills and helped me understand real-world development workflows.As a fresher I'm quick learner and excited to contribute impactful projects while growing as a developer.</p>

                     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            aboutInfo.map((data, index)=>(
                                <div key={index} className='bg-[#040404] rounded-2xl p-2 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                    <div className='text-purple-800 text-4xl mb-4'>
                                           <data.icon/>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                                    <p className='text-gray-500'>{data.description}</p>
                                </div>
                            ))
                        }
                     </div>
                </div>

               </motion.div>
            </div>
        </div>          
    </motion.div>
  )
}

export default About