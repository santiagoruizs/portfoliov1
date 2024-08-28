import React from 'react'
import Skill from './Skill'
import Reddit from '../icons/redditClient.png'
import Github from '../icons/github.svg'

const ProjectCard = ({project}) => {
    const {title, description, skills, link, github} = project
  return (
    <div className='rounded-lg max-w-m mb-5 p-10 border-card border-2 hover:bg-card'>
        {/* <p>{timeline}</p> */}
        <div className='flex justify-between'>
          <h2 className='mb-3'>{title}</h2>
          <a href={github} target='_blank' rel="noreferrer"><img src={Github} alt='github' className='w-7 h-7 cursor-pointer bg-white brightness-0 invert'/></a>
        </div>
        

        {link && <a href={link} target='_blank' rel="noreferrer"><img alt='reddit' src={Reddit} className='w-[200px] mb-5 rounded-lg'/></a>}
        <p className='text-justify'>{description}</p>
       
        <div className='mt-5 flex flex-wrap w-full'>
          {skills.map(s => <Skill skill={s}/>)}
        </div>
        
    </div>
  )
}

export default ProjectCard