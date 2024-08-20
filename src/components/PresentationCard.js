import React from 'react'
import Nameicon from './Nameicon'

const PresentationCard = () => {
  return (
    <div className='p-5 rounded-lg bg-card'>
      <div className='flex items-center'>
        <Nameicon />
        <h1 className='font-bold text-xl lg:text-2xl'>Santiago Ruiz Salazar</h1>
      </div>
        <h3>Software Engineer | Automation Engineer</h3>
        <p>@Accenture</p>
    </div>
  )
}

export default PresentationCard