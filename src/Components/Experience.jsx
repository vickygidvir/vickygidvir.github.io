import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";


const workData = [{
	id: 1,
	category: "experience",
	duration: "Oct 2021 - Present",
	title: "Software Engineer ",
	company: "Cleverex Technology pvt.ltd",
	desc: "Worked on No-Code Application Platform that is powered by an AI enabled development process to digitally transform the business without specialized expertise.Worked with team to enhance code generation engine and successfully reduced the turnaround time to almost 80-90%. Hands on experience on various frontend technologies like Html, Css, Javascript, React and Flutter framework."

}, {
	id: 2,
	category: "experience",
	duration: "Feb 2021 - Aug 2021",
	company: "Virtoustack Softwares pvt.ltd",
	title: "Software Engineer",
	desc: "Hands on experience on Design and development of frontend such as developing various basic and complex UI’s, screens and widgets based on Mock Designs with help of flutter, Handling rest APIs and integrating it into the apps."
}, {
	id: 3,
	category: "experience",
	duration: "Feb 2020 - Jan 2020",
	title: "Android Developer Intern",
	company: "Espares Matrix pvt.ltd",
	desc: "Design, Development of front-end & back-end of applications. Worked on the internal projects on technologies like Android, Java, MySql, Php. Day-to-Day tasks, bugs, Enhancements, Fixes."
},
];

const educationData = [
	{
		id: 1,
		category: "education",
		duration: "2016 - 2019",
		title: "B.E ~ Computer Engineering",
		desc: "Savitribai Phule Pune University"
	},
	{
		id: 2,
		category: "education",
		duration: "2013 - 2016",
		title: "Diploma ~ Computer Engineering",
		desc: "Aissms Polytechnic"
	},
	{
		id: 3,
		category: "education",
		duration: "2003-2013",
		title: "School",
		desc: "Stella Maris High School"
	},
];


const Experience = () => {


	return (

		<section id="experience">
			<div className='container relative my-32'>
				<div>
					<h2 className='heading'>
						Experience & Education
					</h2>

				</div>
				<div className='flex flex-col lg:flex-row gap-10'>
					{/* Experience */}
					<div data-aos="fade-down" data-aos-delay={'400'} className='relative lg:w-[50%] w-full '>
						<div className='text-white bg-blue-container lg:mb-10 flex flex-col gap-5 lg:gap-14 py-6 px-5 lg:px-8 lg:py-10 h-fit overflow-hidden relative rounded-3xl'>
							{
								workData.map((item) => {
									return <div key={item.id} className='pl-9 lg:pl-12 space-y-3 relative' >
										<MdOutlineWorkOutline size={'40px'} className='absolute top-2 -left-[10px] bg-blue-container py-2 z-[10] text-red-color' />
										<div className='flex justify-between flex-col lg:flex-row gap-1'>
											<span className='text-grey-color  text-[15px]'>{item.duration}</span>
											<span className='text-grey-color text-[15px]'>@{item.company}</span>
										</div>
										<h3 className='font-bold text-xl'>{item.title}</h3>
										<p className=' text-[16px] font-light'>{item.desc}</p>
									</div>
								})
							}

							<span className='absolute w-[1px] bg-red-color top-[42px] lg:top-[82px] bottom-[40px] left-[30px] lg:left-[40px] '></span>


						</div>
					</div>

					{/* Education */}

					<div data-aos="fade-up" data-aos-delay={'500'} className='relative lg:w-[50%] w-full'>
						<div className='text-white bg-blue-container lg:mb-10 flex flex-col gap-5 lg:gap-14 py-6 px-5 lg:px-8 lg:py-10 h-fit overflow-hidden relative rounded-3xl'>
							{
								educationData.map((item) => {
									return <div key={item.id} className='pl-9 lg:pl-12 space-y-3 relative' >
										< SlGraduation size={'40px'} className='absolute top-2 -left-[10px] bg-blue-container py-2 z-[10] text-red-color' />
										<span className='text-grey-color text-[15px]'>{item.duration}</span>
										<h3 className='font-bold text-xl'>{item.title}</h3>
										<p className=' text-[16px] font-light'>{item.desc}</p>
									</div>
								})
							}

							<span className='absolute w-[1px] bg-red-color top-[42px] lg:top-[82px] bottom-[40px] left-[30px] lg:left-[40px] '></span>


						</div>
					</div>

				</div >
			</div>
		</section>
	)
}

export default Experience