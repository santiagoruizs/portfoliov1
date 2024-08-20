import React from 'react'
import Skill from './Skill'
import {mainSkills } from '../data/data'

const Bio = () => {
  return (
    <div className='mt-5 flex flex-col'>
        <p className='text-justify'>As an Electronics Engineer, I have always been drawn to problem-solving through software, which initially led me into Automation Engineering. Over the past three years in this field, I have had the opportunity to engage with various technologies and tackle various challenges. These experiences pushed me to incorporate new software and web development tools into my workplace, allowing me to provide added value to my projects. My deep interest in software development has driven me to continuously improve my skills and knowledge around web development, making me enthusiastic about pursuing a career that allows me to develop deeper in this area.
        </p>
        <div className='mt-5 flex flex-wrap w-full'>
            {mainSkills.map(s => <Skill skill={s} />)}
        </div>
        
    </div>
  )
}

export default Bio