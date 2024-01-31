import React from 'react'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
	return (
		<section id="projects">
			<div className='container relative my-32'>
				<h2 className='heading'>
					Recent Works
				</h2>
				<div    className='flex flex-row gap-5 items-center justify-center '>


					<div data-aos="zoom-in" data-aos-delay={'100'} className='relative group '>

						<img className='rounded-3xl' src="https://jthemes.net/themes/html/bolby/demo/images/works/6.svg" alt="" />

						<div className='absolute inset-0 rounded-3xl transition-all ease-in duration-300 cursor-pointer hover:bg-[#7A7AE7]  hover:opacity-[0.9] hidden group-hover:flex  group-hover:justify-around group-hover:px-10 group-hover:flex-col group-hover:text-xl'>
							<span className='font-bold text-white'>Project Management Illustration</span>

							<span className='text-[17px] text-white'>Tech Used: - Html, Css, Javascript,React,tailwind</span>

							<button className=' bg-yellow-color h-12 w-12 rounded-full text-center relative opacity-100 hover:animate-button-push'>
								<a href=""><FaGithub size={'30px'} className='absolute top-2 left-2' />
								</a>
							</button>


						</div>
					</div>

					<div  data-aos="zoom-in" data-aos-delay={'300'} className='relative group'>

						<img className='rounded-3xl' src="https://jthemes.net/themes/html/bolby/demo/images/works/1.svg" alt="" />

						<div className='absolute inset-0 rounded-3xl transition-all ease-in duration-300 cursor-pointer hover:bg-[#7A7AE7]  hover:opacity-[0.9] hidden group-hover:flex  group-hover:justify-around group-hover:px-10 group-hover:flex-col group-hover:text-xl'>
							<span className='font-bold text-white'>Project Management Illustration</span>

							<button className=' bg-yellow-color h-12 w-12 rounded-full text-center relative opacity-100 hover:opacity-75'>
								<a href=""><FaGithub size={'30px'} className='absolute top-2 left-2' />
								</a>
							</button>



						</div>
					</div>

					<div data-aos="zoom-in" data-aos-delay={'500'} className='relative group'>

						<img className='rounded-3xl' src="https://jthemes.net/themes/html/bolby/demo/images/works/3.svg" alt="" />

						<div className='absolute inset-0 rounded-3xl transition-all ease-in duration-300 cursor-pointer hover:bg-[#7A7AE7]  hover:opacity-[0.9] hidden group-hover:flex  group-hover:justify-around group-hover:px-10 group-hover:flex-col group-hover:text-xl'>
							<span className='font-bold text-white'>Project Management Illustration</span>

							<button className=' bg-yellow-color h-12 w-12 rounded-full text-center relative opacity-100 hover:opacity-75'>
								<a href=""><FaGithub size={'30px'} className='absolute top-2 left-2' />
								</a>
							</button>



						</div>
					</div>




				</div >
			</div >
		</section>
	)
}

export default Projects