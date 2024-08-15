import React from 'react'
import PresentationCard from '../components/PresentationCard'
import ExperienceCard from '../components/ExperienceCard'
import Bio from '../components/Bio'

const Layout = () => {
  return (
    <div className='flex flex-row justify-between h-screen p-10'>
        <div className='w-2/5 h-full sticky top-0'>
            <PresentationCard />
            <Bio />
        </div>
        <div className='w-3/5 flex flex-col items-end justify-evenly h-full overflow-y-scroll scrollable-div '>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </div>
  )
}

export default Layout