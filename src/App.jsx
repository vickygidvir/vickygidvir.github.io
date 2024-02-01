import React, { useEffect } from 'react'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true,

    });
    Aos.refresh();
  }, []);

  return (
    <div className='w-full flex'>
      <Sidebar />
      <main className='lg:ml-72 grow'>
         <Home />
        <AboutMe /> 
        <Experience />
        <Projects /> 
        <Contact />
      </main>
    </div>
  )
}

export default App