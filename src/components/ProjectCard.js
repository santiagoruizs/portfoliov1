import React from 'react'
import Skill from './Skill'
import Reddit from '../icons/redditClient.png'

const ProjectCard = ({project}) => {
    const {title, description, skills, link} = project
  return (
    <div className='rounded-lg max-w-m mb-5 p-10 border-card border-2 hover:bg-card'>
        {/* <p>{timeline}</p> */}

        <h2 className='mb-3'>{title}</h2>

        <a href={link} target='_blank' rel="noreferrer"><img alt='reddit' src={Reddit} className='w-[200px] mb-5 rounded-lg'/></a>
        <p className='text-justify'>{description}</p>
       
        <div className='mt-5 flex flex-wrap w-full'>
          {skills.map(s => <Skill skill={s}/>)}
        </div>
        
    </div>
  )
}

export default ProjectCard