import React from 'react'
import Skill from './Skill'

const ExperienceCard = () => {
  return (
    <div className=' rounded-lg w-full mb-5 p-5 border-card border-2 hover:bg-card cursor-pointer'>
        <h2>Experience Title</h2>
        <p>this is an experience description that explains the jobdetails and main tasks</p>
        <div className='mt-5 flex'>
            <Skill skill='Skill'/>
            <Skill skill='Skill'/>
            <Skill skill='Skill'/>
        </div>
        
    </div>
  )
}

export default ExperienceCard