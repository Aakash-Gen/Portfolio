import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header"
import Home from "./components/Home";
import { useInView } from 'react-intersection-observer';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  const [headerColour,setHeaderColour] = useState("text-white")
  const [headerBg,setHeaderBg] = useState("text-white")
  const [currentSection,setCurrentSection] = useState('Home')
  
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.1, 
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.8, 
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.05, 
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.9,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.05,
  });

  useEffect(()=>{
    if (homeInView) {
      setHeaderColour('text-white');
      setHeaderBg('');
      setCurrentSection('Home')
    } else if (aboutInView) {
      setHeaderColour('text-black');
      setHeaderBg('bg-gray-50') 
      setCurrentSection('About')
    } else if (projectsInView) {
      setHeaderColour('text-black');
      setHeaderBg('bg-gray-50') 
      setCurrentSection('Projects')
    } else if (contactInView) {
      setHeaderColour('text-white');
      setHeaderBg('bg-[#141619]') 
      setCurrentSection('Contact')
    } else if (skillsInView) {
      setCurrentSection('Skills');
    }
  },[homeInView,aboutInView,projectsInView,contactInView,skillsInView])
  return (
    <div>
      <Header headerBg={headerBg} headerColour={headerColour} currentSection={currentSection} />
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={aboutRef} >
        <About/>
      </div>
      <div ref={skillsRef}>
        <Skills/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
    </div>
  )
}

export default App