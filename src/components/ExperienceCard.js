import React from 'react'
import Skill from './Skill'
import Link from '../icons/link.svg'

const ExperienceCard = ({experience}) => {
  const {title, description, timeline, skills, at, link} = experience
  return (

    <div className='rounded-lg max-w-m mb-5 p-5 border-card border-2 hover:bg-card'>
        <p>{timeline}</p>
        <h2 className='mb-3'>{title}</h2>
        <p>{description}</p>
        <div className='flex items-center'>
          <p className='font-bold'>{at}</p>
          {link && <a href={link} target='_blank' rel="noreferrer"><img src={Link} alt='link' className='w-4 cursor-pointer bg-white brightness-0 invert m-2'/> </a>}
        </div>
        <div className='mt-5 flex flex-wrap w-full'>
          {skills.map(s => <Skill skill={s}/>)}
        </div>
        
    </div>

  )
}

export default ExperienceCard
// title: "Automation Control Engineering Analyst",
// description: "***************************",
// timeline: "July 2023 to Now",
// skills: ["SQL", "SQL Reporting Services", "Javascript", "CSS", "HTML", "API-REST", "SCADA", "MES"],
// at: "Accenture, Industry X, Barcelona, Spain",
// link: ""