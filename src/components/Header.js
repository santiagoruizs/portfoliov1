
const Header = ({scrollToSection, experienceRef, educationRef, projectsRef, activeSection}) => {
    // const [navigation, setNavigation] = useState('Experience')
    const handleNavigation = (nav, ref) => {
        scrollToSection(ref)
        // setNavigation(nav)
    }
  return (
    <div className='hidden fixed top-0 z-50 w-full lg:flex p-10'>
        <div className='w-2/5'>
            <p className='text-xl font-bold'>Portfolio Website</p>
        </div>
        <div className='flex w-full lg:w-3/5 justify-center pl-28 items-center space-x-5'>
        <p className={'cursor-pointer text-gray hover:font-bold '+(activeSection === 'Experience' ? 'border-b-2 border-white font-bold' : '')} onClick={() => handleNavigation('Experience',experienceRef)}>Experience</p>
        <p className={'cursor-pointer text-gray hover:font-bold '+(activeSection === 'Education' ? 'border-b-2 border-white  font-bold' : '')} onClick={() => handleNavigation('Education', educationRef)}>Education</p>
        <p className={'cursor-pointer text-gray hover:font-bold '+(activeSection === 'Projects' ? 'border-b-2 border-white  font-bold' : '')} onClick={() => handleNavigation('Projects', projectsRef)}>Projects</p>
        </div>
    </div>
  )
}

export default Header