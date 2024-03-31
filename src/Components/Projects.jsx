import React from 'react'
import { FaGithub } from "react-icons/fa";
import social from '../assets/social.png'
import homerental from '../assets/homerental.png'


const projectData = [{
	id: 1,
	image: homerental,
	githubLink: "https://github.com/vickygidvir/home-rental/",
	liveLink: "https://home-rental-web.vercel.app/",
},
{
	id: 2,
	image: social,
	githubLink: "https://github.com/vickygidvir/social-media-web/",
	liveLink: "#",
},

];

const Projects = () => {
	return (
		<section id="projects">
			<div className='container relative my-32 '>
				<h2 className='heading'>
					Recent Works
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center'>

					{
						projectData.map((project) => {
							return <div key={project.id} data-aos="zoom-in" data-aos-delay={'100'} className='relative group'>


								<div className='lg:group-hover:scale-[1.10] duration-500 cursor-pointer'>
									<img className='rounded-3xl h-[240px] object-cover px-2' src={project.image} alt="" />

									<div className='flex flex-row items-center justify-center gap-5 my-5'>
										<button className='text-center text-white text-xl hover:opacity-50'>
											<a href={project.githubLink}>
												<FaGithub size={'28px'} className='text-white inline' />
											</a>
										</button>


										<button className='text-center text-white text-md hover:opacity-50'>
											<a href={project.liveLink} className='flex items-center bg-red-500 rounded-md px-2 py-1'>

												<div className='bg-white animate-pulse h-2 w-2 rounded-full mr-2'></div>
												<h3 className='text-white '>Live</h3>

											</a>
										</button>


									</div>

								</div>


							</div>



						})
					}
				</div >
			</div >
		</section>
	)
}

export default Projects