import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import avatar from '../assets/home-avatar.png'
import { Typewriter } from 'react-simple-typewriter'
import resume from '../assets/resume.pdf'

const Home = () => {
	return (
		<section id="home">
			<div className='h-screen flex flex-col items-center justify-around'>

				<div className='flex items-center justify-around'>
					<div data-aos="fade-up" data-aos-delay="400" className='flex items-center flex-col justify-center text-white gap-4'>
						<div className='text-4xl font-bold flex '>Hello <h2 className='animate-waving-hand ml-3'> 👋 </h2>, </div>
						<h1 className='font-bold text-5xl '>Vicky M. Gidvir</h1>
						<span className='flex gap-2 text-xl'>I'm<h2 className=' overflow-hidden whitespace-nowrap text-md text-white'><Typewriter
							words={['Frontend Developer', 'Flutter Developer', 'UI Developer', 'React Developer']}
							loop={5}
							cursor
							cursorStyle='_'
							typeSpeed={90}
							deleteSpeed={50}
							delaySpeed={1000}
						/></h2></span>
						<ul className='flex gap-4 items-center justify-center text-3xl my-3 '>
							<a href="https://www.linkedin.com/in/vickygidvir"><li className='hover:text-yellow-color cursor-pointer'><FaLinkedin /></li></a>
							<a href="https://github.com/vickygidvir">	<li className='hover:text-yellow-color cursor-pointer'><FaGithub /></li></a>
						</ul>

						<button className='btn-red'><a href={resume} download="vicky_gidvir_resume_2024">Download Resume</a></button>
					</div>

					<div data-aos="fade-down" data-aos-delay="600" >
						<img className="h-full" src={avatar} alt="" />
					</div>

				</div>

				<div data-aos="zoom-in-up" data-aos-delay="800" className='flex flex-col items-center gap-2'>
					<span className='font-light text-white'>Scroll Down</span>
					<span className='border-2 border-white w-5 h-7 rounded-2xl relative'>
						<a href="#about" className='w-1 h-1 bg-white absolute rounded-full top-3 left-1.5 animate-mouse-wheel'>
						</a>
					</span>
				</div>

			</div >
		</section >
	)
}

export default Home