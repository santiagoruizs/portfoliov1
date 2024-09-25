import React from 'react'
import Skill from './Skill'
// import Reddit from '../icons/redditClient.png'
import Github from '../icons/github.svg'

const ProjectCard = ({project}) => {
    const {title, description, skills, link, github, image} = project
  return (
    <div className='rounded-lg max-w-m mb-5 p-5 lg:p-10 border-card border-2 hover:bg-card'>
        {/* <p>{timeline}</p> */}
        <div className='flex justify-between'>
          <h2 className='mb-3'>{title}</h2>
          <div>
            <a href={github} target='_blank' rel="noreferrer"><img src={Github} alt='github' className='w-7 h-7 cursor-pointer bg-white brightness-0 invert'/></a>
          </div>  
        </div>
        

        {link && <a href={link} target='_blank' rel="noreferrer"><img alt={title} src={image} className='w-[200px] mb-5 rounded-lg'/></a>}
        <p className='text-justify'>{description}</p>
       
        <div className='mt-5 flex flex-wrap w-full'>
          {skills.map(s => <Skill skill={s}/>)}
        </div>
        
    </div>
  )
}

export default ProjectCard