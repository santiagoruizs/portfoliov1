
import PresentationCard from '../components/PresentationCard'
import ExperienceCard from '../components/ExperienceCard'
import Bio from '../components/Bio'
import { useState } from 'react'

const Layout = () => {
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
    <div className='flex flex-row justify-around h-screen p-10' onMouseMove={handleMouseMove} style={{ background: gradient }}>
        <div className='w-2/5 h-full sticky top-0'>
            <PresentationCard />
            <Bio />
        </div>
        <div className='w-3/5 flex flex-col items-end justify-evenly h-full overflow-y-scroll scrollable-div '>
            <div >
              <h3 className='mb-5'>Experience</h3>
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
            </div>
            <div>
            <h3 className='mb-5'>Education</h3>
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
            </div>
        </div>
    </div>
  )
}

export default Layout