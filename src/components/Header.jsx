import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";


function Header(props) {
  const getUnderlineClass = (section) => {
    return props.currentSection === section ? 'border-b-4 border-[#D07C43]' : '';
  };
  const [toggleMenu,setToggleMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setToggleMenu(false);
      setIsClosing(false);
    }, 300);
  };
  return (
    <div className={`h-14 w-full fixed z-10 top-0 flex justify-between ${props.headerColour} ${props.headerBg} items-center md:px-24 px-6 py-10`}>
        <Link to="home" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer text-[28px] md:text-[32px] font-semibold ${getUnderlineClass('Home')}`} >Portfolio</Link>
        <div className='md:flex justify-evenly gap-12 text-[22px] font-medium hidden'>
            <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('About')}`} >About</Link>
            <Link to="skills" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('Skills')}`} >Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-70} className={`hover:cursor-pointer ${getUnderlineClass('Projects')}`} >Projects</Link>
        </div>
        <Link to="contact" spy={true} smooth={true} duration={500} offset={-70} className="hover:cursor-pointer hidden md:block" >
          <button className='bg-[#D07C43] px-5 py-1 rounded-lg text-lg font-medium '>Contact</button>
        </Link>
        <div className=" bg-gray-200 rounded-full p-1 md:hidden">
          {!toggleMenu && (
            <IoMenu fontSize={26}color="black" className="cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div
            className={`fixed -right-0 top-1.5 p-3 w-[95%] mx-2 h-16 shadow-2xl px-4 flex justify-evenly items-center rounded-3xl bg-gray-300 bg-glass text-black ${ isClosing ? 'animate-slide-out' : 'animate-slide-in'}`}>
              <Link to="about" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> handleMenuClose(false)} className='hover:cursor-pointer justify-center  py-1.5 w-full text-md font-medium' >About</Link>
              <Link to="skills" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> handleMenuClose(false)} className='hover:cursor-pointer justify-center   py-1.5  w-full text-md font-medium'>Skills</Link>
              <Link to="projects" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> handleMenuClose(false)} className='hover:cursor-pointer justify-center  py-1.5  w-full text-md font-medium'>projects</Link>
              <AiOutlineCloseCircle fontSize={104} color="black" className="cursor-pointer" onClick={() => handleMenuClose(false)} />
            </div>
          )}
        </div>
    </div>
  )
}

export default Header
