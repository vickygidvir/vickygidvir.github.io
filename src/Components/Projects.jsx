import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import social from '../assets/social.png'
import resumeBuilder from '../assets/resumeBuilder.png'
import allinone from '../assets/allinone.png'


const projectData = [{
	id: 1,
	image: social,
	githubLink: "",
	liveLink: "",
}, {
	id: 2,
	image: resumeBuilder,
	githubLink: "",
	liveLink: "",
}, {
	id: 3,
	image: allinone,
	githubLink: "",
	liveLink: "",
}
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

								<img className='rounded-3xl h-[250px] object-cover group-hover:blur-sm transition-opacity ease-in-out duration-300' src={project.image} alt="" />

								<div className='absolute inset-0 rounded-3xl cursor-pointer hidden group-hover:flex  group-hover:justify-around group-hover:px-10 group-hover:py-1 group-hover:flex-col group-hover:text-xl'>

									<div className='flex flex-row items-center justify-center gap-5'>
										<button className=' bg-yellow-color h-12 w-12 rounded-full text-center relative opacity-100 hover:animate-button-push'>
											<a href={project.githubLink}><FaGithub size={'30px'} className='absolute top-2 left-2' />
											</a>
										</button>
										<button className=' bg-yellow-color h-12 w-12 rounded-full text-center relative opacity-100 hover:animate-button-push'>
											<a href={project.liveLink}><TbExternalLink size={'30px'} className='absolute top-2 left-2' />
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