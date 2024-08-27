import React from 'react'
import Skill from './Skill'
import {mainSkills } from '../data/data'
const bioIntro = "Full-stack software developer with over 5 years of experience crafting innovative software solutions across diverse sectors, including automation, IoT and web development."
const bioParagraph = "I specialize in building scalable and efficient applications using modern technologies like JavaScript, React, TypeScript, Node.js, SQL, Postgres, HTML, and CSS. My expertise extends to AVEVA SCADA and MES software, with 3 years of hands-on experience delivering high-impact industrial solutions. I'm always eager to learn new things, keep up with the latest tech trends, and find better ways to add value to every project I work on."
const Bio = () => {
  return (
    <div className='mt-5 flex flex-col'>
        <p className='text-justify mb-5 px-2'>{bioIntro}
        </p>
        <p className='text-justify px-2'>{bioParagraph}</p>
        <div className='mt-5 flex flex-wrap w-full'>
            {mainSkills.map(s => <Skill skill={s} />)}
        </div>
        
    </div>
  )
}

export default Bio