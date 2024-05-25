
function Header(props) {
  const getUnderlineClass = (section) => {
    return props.currentSection === section ? 'border-b-4 border-[#D07C43]' : '';
  };

  return (
    <div className={`h-14 w-full fixed z-10 top-0 flex justify-between ${props.headerColour} ${props.headerBg} items-center px-24 py-10`}>
        <h1 className={`text-4xl font-semibold ${getUnderlineClass('Home')}`}>Portfolio</h1>
        <div className='flex justify-evenly gap-12 text-2xl font-medium'>
            <h2 className={getUnderlineClass('About')} >About</h2>
            <h2 className={getUnderlineClass('Projects')} >Projects</h2>
            {/* <h2 className={getUnderlineClass('Skills')} >Skills</h2> */}
            <h2 className={getUnderlineClass('Contact')} >Contact</h2>
        </div>
        <button className='bg-[#D07C43] px-6 py-1.5 rounded-lg text-xl '>Hire Me</button>
    </div>
  )
}

export default Header