
import PresentationCard from '../components/PresentationCard'
import ExperienceCard from '../components/ExperienceCard'
import Bio from '../components/Bio'
import { useState } from 'react'
import Socials from '../components/Socials'
import {experience, education, projects } from '../data/data'
import ProjectCard from '../components/ProjectCard'

const Layout = () => {
  const project = {
    link: 'https://reliable-scone-2b4a58.netlify.app/',
    skills: ['React', 'Redux']
  }
  // console.log(experience)
  const [gradient, setGradient] = useState("radial-gradient(circle, #09090B, #09090B)");
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX / width) * 100;
    const y = (clientY / height) * 100;

    setGradient(
      `radial-gradient(circle at ${x}% ${y}%, #27272A, #09090B)`
    );
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-5 lg:p-10 lg:flex-row lg:justify-around lg:h-screen' onMouseMove={handleMouseMove} style={{ background: gradient }}>
        <div className='w-full lg:w-2/5 h-full sticky top-0'>
            <PresentationCard />
            <Bio />
            <Socials />
        </div>
        <div className='w-full lg:w-3/5 flex flex-col lg:items-end items-center justify-evenly h-full overflow-y-scroll scrollable-div '>
            <div className='w-full lg:w-10/12'>
              <h3 className='mb-5 font-bold'>Experience</h3>
              {experience.map(e => <ExperienceCard experience={e}/>)} 
            </div>
            <div className=' w-full lg:w-10/12'>
              <h3 className='mb-5 font-bold' >Education</h3>
              {education.map(e => <ExperienceCard experience={e}/>)} 
            </div>
            <div className=' w-full lg:w-10/12'>
              <h3 className='mb-5 font-bold' >Proyects</h3>
              {projects.map(p => <ProjectCard project={p}/>)}
            </div>
        </div>
    </div>
  )
}

export default Layout