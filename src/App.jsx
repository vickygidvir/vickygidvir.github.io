import React from 'react'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='w-full flex'>
      <Sidebar />
      <main className='ml-72 grow'>
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