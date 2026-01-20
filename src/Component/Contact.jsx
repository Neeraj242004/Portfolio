import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaDribbble, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:`easeOut`}}
    viewport={{once: false, amount:0.2}}
    id='Contact'
    className='py-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1z]'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get In<span className='text-purple-600'> Touch </span></h2>
            <p className='text-gray-600 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto mt-12'>
                 <div>
                    <form className='space-y-6'>
                       <div>
                        <label htmlFor="name" className='block text-gray-500 mb-2'>Your Name</label>
                        <input className='w-full bg-gray-600 border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <div>
                        <label htmlFor="email" className='block text-gray-500 mb-2'>Email Address</label>
                        <input className='w-full bg-gray-600 border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <div>
                        <label htmlFor="message" className='block text-gray-500 mb-2'>Your Message</label>
                        <textarea className='w-full h-40  bg-gray-600 border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <button type='sumbit' className='w-full  px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                               Send
                       </button>
                    </form>
                 </div>
                 {/* { information} */}
                 <div className='space-y-10'>
                    <div className='flex items-start'>
                       <div className='text-purple-600 text-2xl mr-6'>
                        <FaMapMarkedAlt/>
                       </div>
                       <div>
                        <h3 className='text-lg font-semiboldmb-2'>Location</h3>
                        <p className='text-gray-200'>Haryana, Faridabad</p>
                       </div>
                    </div>
                     <div className='flex items-start'>
                       <div className='text-purple-600 text-2xl mr-6'>
                        <FaEnvelope/>
                       </div>
                       <div>
                        <h3 className='text-lg font-semiboldmb-2'>Email</h3>
                        <p className='text-gray-200'>Neerajbhardwaj45d@gmail.com</p>
                       </div>
                    </div>
                     <div className='flex items-start'>
                       <div className='text-purple-600 text-2xl mr-6'>
                        <FaPhone/>
                       </div>
                       <div>
                        <h3 className='text-lg font-semiboldmb-2'>Phone</h3>
                        <p className='text-gray-200'>+91 9599632398</p>
                       </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className=' text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4 mt-4'>
                            <a href="#" className='w-12 h-12 rounded-full bg-black flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition duration-300'>
                                <FaGithub/>
                            </a>
                             <a href="#" className='w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300'>
                                <FaLinkedin/>
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-black flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition duration-300'>
                                <FaInstagram/>
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-black flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300'>
                                <FaDribbble/>
                            </a>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Contact