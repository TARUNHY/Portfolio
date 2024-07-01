import React from 'react';

const Technologies = [
  {name:"HTML",iconclass:'devicon-html5-plain'},
  {name:"CSS" , iconclass:'devicon-css3-plain'},
  {name:"BootStrap",iconclass:'devicon-bootstrap-plain'},
  {name:"Tailwind CSS" , iconclass:'devicon-tailwindcss-plain'},
  {name:"Material Ui" , iconclass:'devicon-materialui-plain'},
  {name:"JavaScript" , iconclass:'devicon-javascript-plain'},
  {name:"React JS" , iconclass:'devicon-react-original'},
  {name:"Node JS" , iconclass:'devicon-nodejs-plain'},
  {name:"Express" , iconclass:'devicon-express-original'},
  {name:"MongoDB" , iconclass:'devicon-mongodb-plain'},
 
]

const Skill = () => {
  return (
    <div className='  flex h-[100vh] items-center justify-center'>
     
     <section>
      <div>
       <center>
         <h1 className='text-3xl text-white font-semibold mt-4 mb-11'>Technical <span className='text-blue-700'>Skills</span></h1>
       </center>
      </div>
      <div className=''>
        <div className='flex flex-wrap justify-center gap-4 p-4  items-center'>
          {Technologies.map((tech)=>(
            <div key={tech.name} className=' flex flex-col md:flex-row gap-2 mskill p-2 md:py-2 md:px-2 justify-center items-center rounded-lg  border hover:animate-bounce  '>
              <i className={`${tech.iconclass} text-3xl md:text-4xl skill text-white`}></i>
              <p className='text-white text-xs md:text-sm lg:text-base skill'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
     </section>
    </div>
  )
}

export default Skill
