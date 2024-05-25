import { useState } from "react";
import { Link } from "react-scroll";

function Header(props) {
  // const [currentSection1,setCurrentSection1] =useState("Home");
  const getUnderlineClass = (section) => {
    return props.currentSection === section ? 'border-b-4 border-[#D07C43]' : '';
  };

  // const getUnderlineOnClick =()=>{
  //   return  currentSection1==="Skills" ? 'border-b-4 border-[#D07C43]' : '';
  // }

  

  return (
    <div className={`h-14 w-full fixed z-10 top-0 flex justify-between ${props.headerColour} ${props.headerBg} items-center px-24 py-10`}>
        <Link to="home" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer text-4xl font-semibold ${getUnderlineClass('Home')}`} >Portfolio</Link>
        <div className='flex justify-evenly gap-12 text-2xl font-medium'>
            <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('About')}`} >About</Link>
            <Link to="skills" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('Skills')}`} >Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('Projects')}`} >Projects</Link>
        </div>
        <Link to="contact" spy={true} smooth={true} duration={500} offset={-70} className="hover:cursor-pointer" >
          <button className='bg-[#D07C43] px-6 py-1.5 rounded-lg text-xl '>Contact</button>
        </Link>
    </div>
  )
}

export default Header