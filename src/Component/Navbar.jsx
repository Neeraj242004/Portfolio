import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-6 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
     <div>
      <a href="" className='text-3xl font-bold text-white'>Neeraj
        <span className='text-purple-400'> Kumar </span>
        <div className='w-4 h-4 bg-purple-700 rounded-full'></div>
      </a>
   </div>
    <div className='hidden md:flex space-x-10'>
      <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Home</span>
           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
      </a>

       <a href="#About" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>About</span>
           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
      </a>

       <a href="#Skills" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Skills</span>
           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
      </a>

       <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Projects</span>
           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
      </a>

       <a href="#Contact" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Contact</span>
           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
      </a>
     </div>
    {/* m button */}
     <div className='md:hidden'>
      {
        showMenu ?
        <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
        <FaBars  onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
      }
  </div>  
  </div>
    {/* m menu */}
    {
      showMenu &&(
        <div className='md:hidden mt-4 bg-gray-600 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center '>
          <a  onClick={()=>setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Home</span>
          
      </a>

       <a  onClick={()=>setShowMenu(!showMenu)} href="#About" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>About</span>
          
      </a>

       <a  onClick={()=>setShowMenu(!showMenu)} href="#Skills" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Skills</span>
          
      </a>

       <a  onClick={()=>setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Projects</span>
          
      </a>

       <a  onClick={()=>setShowMenu(!showMenu)} href="#Contact" className='relative text-white/80 transition duration-300 hover:text-purple-600 group'>
           <span>Contact</span>
          
      </a>
        </div>
      )
    }
 </nav>
  )
}

export default Navbar