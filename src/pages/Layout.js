
import PresentationCard from '../components/PresentationCard'
import ExperienceCard from '../components/ExperienceCard'
import Bio from '../components/Bio'
import { useState } from 'react'
import Socials from '../components/Socials'

const experience = [
  {
    title: "Automation Control Engineering Analyst",
    description: "Automation control engineer, on projects on roles such as frontend and backend development for industrial aplications (SCADA and MES), integration with 3rd party applications into industrial software and general database management on clients from industries such as Food, Pharma and Infrastructures ",
    timeline: "July 2023 to Now",
    skills: ["SQL", "SQL Reporting Services", "Javascript", "CSS", "HTML", "API-REST", "SCADA", "MES"],
    at: "Accenture, Industry X, Barcelona, Spain",
    link: "https://www.accenture.com/es-es"
  },
  {
    title: "Automation Engineer",
    description: "Automation engineer junior position, on projects on roles such as backend development for industrial aplications, general database management on clients from industries such as Food, Pharma",
    timeline: "February 2021 to July 2023",
    skills: ["SQL", "SQL Reporting Services", "C#", "API-REST", "SCADA", "MES"],
    at: "Oasys-sw, Barcelona, Spain",
    link: ""
  },
  {
    title: "Technical Support on Automation Product Lines",
    description: "Technical support for the sales team on the automation product line",
    timeline: "July 2019 to March 2020",
    skills: ["ABB", "Schneider Electric", "Festo", "Weidmuller"],
    at: "RG Distribuciones, Colombia",
    link: "https://rgd.com.co/"
  },

]

const education = [
  {
    title: "Full-Stack Engineer",
    description: "A full-stack engineer path, back-end to front-end. Includes JavaScript, Node.JS, SQL, Express.JS, React, TDD, and more.",
    skills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "React", "Redux", "Node.js", "Express.js", "SQL", "PostgreSQL", "Web Security", "Data Structures", "Algorithms"],
    at: "Codecademy",
    // certificate: "https://www.codecademy.com/profiles/santiagoRuiz5100247613/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
    link: "http://codecademy.com",
    timeline: "September 2023 to July 2024"
  },
  {
    title: "Master in Digital Industrial Transformation",
    description: "Masters degree focused on integrating technologies such as Machine Learning and Internet fo things on production and infrastructure enviorments as well as technologies such as PLCs, SCADA and MES",
    skills: ["SQL", "MongoDB", "MQTT", "Arduino", "Raspberrypi", "LoRaWAN", "Zigbee", "Docker", "Linux", "Javascript", "Node-Red", "Python", "scikit-learn", "ladder", "Wonderware SP", "WonderwareMe"],
    at: "CIM UPC Barcelona, Spain",
    link: "https://www.cimupc.org/en/",
    timeline: "March 2020 to July 2021",
  },
  {
    title: "Electronics Engineer",
    description: "Electronics Engineer degree with focus on analogic and digital circuits design, IOT and other topics",
    skills: ["C++","Python","Raspberry","MATLAB","Networks", ""],
    link: "https://www.javeriana.edu.co/inicio",
    at: "Pontificia Universidad Javeriana, Bogota, Colombia",
    timeline : "January 2014 to March 2019"
  },

]
const Layout = () => {
  // console.log(experience)
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
    <div className='flex flex-col justify-center items-center min-h-screen p-5 lg:p-10 lg:flex-row lg:justify-around lg:h-screen' onMouseMove={handleMouseMove} style={{ background: gradient }}>
        <div className='w-full lg:w-2/5 h-full sticky top-0'>
            <PresentationCard />
            <Bio />
            <Socials />
        </div>
        <div className='w-full lg:w-3/5 flex flex-col lg:items-end items-center justify-evenly h-full overflow-y-scroll scrollable-div '>
            <div className='w-full lg:w-10/12'>
              <h3 className='mb-5'>Experience</h3>
              {experience.map(e => <ExperienceCard experience={e}/>)} 
            </div>
            <div className=' w-full lg:w-10/12'>
              <h3 className='mb-5'>Education</h3>
              {education.map(e => <ExperienceCard experience={e}/>)} 
            </div>
        </div>
    </div>
  )
}

export default Layout