import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header"
import Home from "./components/Home";
import { useInView } from 'react-intersection-observer';


function App() {
  const [headerColour,setHeaderColour] = useState("text-white")
  const [headerBg,setHeaderBg] = useState("text-white")
  const [currentSection,setCurrentSection] = useState('Home')
  
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5, 
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5, 
  });

  useEffect(()=>{
    if (homeInView) {
      setHeaderColour('text-white');
      setHeaderBg('');
      setCurrentSection('Home')
    } else if (aboutInView) {
      setHeaderColour('text-black');
      setHeaderBg('bg-white') 
      setCurrentSection('About')
    }
  },[homeInView,aboutInView])
  return (
    <div>
      <Header headerBg={headerBg} headerColour={headerColour} currentSection={currentSection} />
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={aboutRef} >
        <About/>
      </div>
    </div>
  )
}

export default App