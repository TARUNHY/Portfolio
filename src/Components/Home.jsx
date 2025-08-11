import React from 'react';
import MyResume from '../Resume/Resume.pdf'
const Home = () => {
  return (
    <div className='container mx-auto flex justify-between items-center h-[100vh]'>
      <div className='text-white h-[350px] w-1/2  '>
        <h2 className='text-4xl italic hhead'>Hello, </h2>
        <h2 className='text-4xl my-3 italic hhead'>I am <span className='font-bold text-blue-700'>Tarun</span></h2>
        <p className='htext'>Welcome to my portfolio! I'm a MERN Stack Developer with strong foundation in HTML,
           CSS, JavaScript, React, Express, Node, and MongoDB. My proficiency in front-end and back-end 
           technologies ensures seamless user experiences and robust functionality, while my problem-solving
            mindset helps in overcoming obstacles in the development process."I am actively seeking opportunities
             to apply my skills, collaborate with innovative teams, and gain valuable insights.</p>
          <div className='mt-9 '>
             <a href={MyResume} download className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 bi bi-download rounded-full hdow">
                Download Resume
          </a>
          </div>    
      </div>
      <div >
        <img className='rounded-full border h-[250px] w-[250px] border-black himg' src={`${process.env.PUBLIC_URL}/tarun1.png`}  alt="" />
      </div>
    </div>
  )
}

export default Home
