import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";
import vlogo from './assets/vlogo.png';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
      once: true,
      mirror: true,
    });
    Aos.refresh();


    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return (
    <div className='w-full flex'>
      {loading ? (
        <div className='w-full h-screen flex items-center justify-center flex-col gap-4'>
          <img src={vlogo} className='w-28 h-28 lg:w-40  lg:h-40 animate-bounce' alt="" />
          <h1 className='text-3xl font-semibold text-white animate-pulse'>Vicky Gidvir</h1>
        </div>
      ) : (
        <>
          <Sidebar />

          <main className='lg:ml-80 grow'>
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
