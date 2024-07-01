import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className=' flex justify-between h-[100%]'>
      <div className='flex items-center'>
     <p className='text-1xl text-white fpara '>Copyright©2024 | All Right Reserved</p> 
      </div>
      <div className='flex items-center'>
       <h2 className='text-2xl text-white fpara '>Get in Touch</h2>
      <div className="flex flex-row items-end">
      <div className='flex flex-col md:flex-row gap-2 p-2 md:py-2 m-2 md:px-2 justify-center font  items-center rounded-full border hover:animate-bounce'>
      <a href="https://github.com/" target='_blank'><FaGithub className="text-2xl md:text-2xl fonti text-white" /></a>
        
      </div>
      <div className='flex flex-col md:flex-row gap-2 p-2 m-2 md:py-2 md:px-2 justify-center font items-center rounded-full border hover:animate-bounce'>
      <a href="https://www.linkedin.com/in/lakkireddy-tarun-reddy"  target='_blank'><FaLinkedin className="text-2xl fonti md:text-2xl text-white" /></a>
       
      </div>
      <div className='flex flex-col md:flex-row gap-2 px-2 md:py-2 m-2 md:px-2 justify-center items-center rounded-full font1 border hover:animate-bounce'>
      <a href="mailto:lakkireddytarunreddy@gmail.com" target='_blank'>    <MdEmail className="text-2xl md:text-2xl fonti1 text-white" /></a>
      
      </div >
     <a  href="#nav">      <button className='flex justify-center but  items-end align-middle mb-4 bi bi-arrow-up-circle border-white text-white text-4xl  hover:text-blue-700'></button></a>
    </div>
      </div>
    </div>
  )
}

export default Footer
