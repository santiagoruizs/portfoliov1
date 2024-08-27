
import PresentationCard from '../components/PresentationCard'
import ExperienceCard from '../components/ExperienceCard'
import Bio from '../components/Bio'
import { useState, useRef, useEffect } from 'react'
import Socials from '../components/Socials'
import {experience, education, projects } from '../data/data'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'

const Layout = () => {

  const [gradient, setGradient] = useState("radial-gradient(circle, #09090B, #09090B)");
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = [
      { id: 'Experience', ref: experienceRef },
      { id: 'Education', ref: educationRef },
      { id: 'Projects', ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // 60% of the section needs to be visible
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div  onMouseMove={handleMouseMove} style={{ background: gradient }}>
    <Header scrollToSection={scrollToSection} experienceRef={experienceRef} educationRef={educationRef} projectsRef={projectsRef} activeSection={activeSection}/>
    <div className='flex flex-col justify-center items-center p-5 lg:p-10 lg:flex-row lg:pt-[100px] lg:justify-around lg:h-screen'>
        <div className='w-full lg:w-2/5 h-full sticky top-0'>
            <PresentationCard />
            <Bio />
            <Socials />
        </div>
        <div className='w-full lg:w-3/5 flex flex-col lg:items-end items-center justify-evenly h-full overflow-y-scroll scrollable-div '>
            <div id="Experience" className='w-full lg:w-10/12' ref={experienceRef}>
              <h3 className='mb-5 font-bold'>Experience</h3>
              {experience.map(e => <ExperienceCard experience={e}/>)} 
            </div>
            <div id="Education" className=' w-full lg:w-10/12' ref={educationRef}>
              <h3 className='mb-5 font-bold' >Education</h3>
              {education.map(e => <ExperienceCard experience={e}/>)} 
            </div>
            <div id="Projects" className=' w-full lg:w-10/12' ref={projectsRef}>
              <h3 className='mb-5 font-bold' >Proyects</h3>
              {projects.map(p => <ProjectCard project={p}/>)}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Layout