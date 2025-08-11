import React from 'react';
import project from '../Resume/project.png';
import project1 from '../Resume/project1.png';
import project2 from '../Resume/project2.png';

const Projects = () => {
  return (
    <div className="  flex flex-col items-center justify-center h-[100vh] ">
     
      <h3 className="text-white text-3xl text-center  mb-12">
        Project<span className='text-blue-700'>s</span>
      </h3>

     
      <div className="flex flex-wrap justify-center  ">
      
        <div className="relative group rounded-lg overflow-hidden pmain bg-blue-400 shadow-lg w-[280px] h-[170px]">
          
          <div className="p-4 text-center group-hover:hidden  bg-blue-400">
            <h4 className="text-xl font-bold  bg-blue-400 mb-2">ToDo Project</h4>
            <p className="text-gray-600  bg-blue-400 text-center">ToDo application allows users to add, delete, and modify their tasks seamlessly.</p>
          </div>
         
          <div className="absolute inset-0 flex items-center overlay-container justify-center opacity-0 group-hover:opacity-100 group-hover:flex bg-gray-300 transition-opacity duration-300">
            <div className="flex flex-col items-center overlay-content justify-center bg-white rounded-lg p-4">
              <a target='_blank' 
                className="flex items-center justify-center text-xl bi bi-box-arrow-in-up bg-white overlay-link"
                href="https://front-end-tawny-eight.vercel.app/"
              >
                <img
                  className="rounded-lg"
                  src={project2}
                  alt="Project Image"
                />
              </a>
            </div>
          </div>
        </div>

     
        <div className="relative group rounded-lg overflow-hidden pmain bg-blue-400 mx-8 shadow-lg w-[280px] h-[170px]">
         
          <div className="p-4 group-hover:hidden  bg-blue-400">
            <h4 className="text-xl font-bold text-center bg-blue-400   mb-2">Video Library</h4>
            <p className="text-gray-600 bg-blue-400 text-center  ">This video library application provides users can access to enjoy the videos</p>
          </div>
          
          <div className="absolute inset-0 overlay-container flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:flex bg-gray-300 transition-opacity duration-300">
            <div className="flex flex-col items-center overlay-content justify-center bg-white rounded-lg p-4">
              <a target='_blank'
                className="flex items-center justify-center text-xl bi bi-box-arrow-in-up overlay-link bg-white"
                href="https://frontend-chi-sable-49.vercel.app/"
              >
                <img
                  className="rounded-lg project-image"
                  src={project}
                  alt="Project Image"
                />
              </a>
            </div>
          </div>
        </div>

      
        <div className="relative group rounded-lg overflow-hidden pmain bg-blue-400 shadow-lg w-[280px] h-[170px]">
         
          <div className="p-4 group-hover:hidden   bg-blue-400 ">
            <h4 className="text-xl text-center  font-bold bg-blue-400 mb-2">E-Commerce</h4>
            <p className="text-gray-600 text-center bg-blue-400">This E-Commerce application build with React js and it is fully responsive.</p>
          </div>
         
          <div className="absolute overlay-container inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:flex bg-gray-300 transition-opacity duration-300">
            <div className="flex flex-col items-center overlay-content justify-center bg-white rounded-lg p-4">
              <a target='_blank'
                className="flex items-center justify-center text-xl bi bi-box-arrow-in-up overlay-link bg-white"
                href="https://e-commerce-da3da.web.app/"
              >
                <img
                  className="rounded-lg project-image"
                  src={project1}
                  alt="Project "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;