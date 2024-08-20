import React from 'react'
import Linkedin from '../icons/Linkedin.png'
import Github from '../icons/github.svg'

const Socials = () => {
  return (
    <div className='flex justify-center items-center mt-5'>
        <a href='https://www.linkedin.com/in/santiago-ruiz-salazar-480723179/' target='_blank' rel="noreferrer"><img src={Linkedin} alt='linkedin' className='w-10 h-9 cursor-pointer brightness-0 invert m-2'/></a>
        <a href='http://github.com/santiagoruizs' target='_blank' rel="noreferrer"><img src={Github} alt='github' className='w-10 cursor-pointer bg-white brightness-0 invert m-2' /></a>
    </div>
  )
}

export default Socials