import React from 'react'
import Skill from './Skill'

const ExperienceCard = () => {
  return (
    <div className='border-2 border-black rounded-lg w-3/4 mb-5 p-5'>
        <h2>Experience Title</h2>
        <p>this is an experience description that explains the jobdetails and main tasks</p>
        <div className='mt-5 flex justify-around'>
            <Skill skill='Skill'/>
            <Skill skill='Skill'/>
            <Skill skill='Skill'/>
        </div>
        
    </div>
  )
}

export default ExperienceCard