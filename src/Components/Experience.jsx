import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";


const workData = [{
	id: 1,
	category: "experience",
	duration: "May 2025 - Present",
	title: "Frontend Developer",
	company: "Siemens Energy, Pune",
	desc: [
		"I have recently joined Siemens Energy as a Frontend Developer, where I am working on innovative solutions for the energy sector."
	],
}, {
	id: 2,
	category: "experience",
	duration: "Oct 2021 - Present",
	title: "Senior Software Engineer ",
	company: "CleverEX Technology pvt.ltd",
	desc: [
		"Contributed to the development of an AI-powered software development platform, capable of boosting productivity by 80% and slashing costs by 90%.",
		"Spearheaded an advanced dynamic code generation engine in Flutter and React, reducing application code delivery time by 60%, from minutes to 15-20 seconds.",
		"Implemented reusable component architecture in React, reducing development time by 25%.",
		"Collaborated with an 8+ member agile team, enhancing performance and user experience through continuous feedback and iterative development.",
		"Conducted rigorous testing and debugging with React and Flutter testing libraries, reducing post-deployment bugs and ensuring a more stable release cycle.",
		"Served as a technical interviewer, assessing candidates, contributing to hiring processes and team growth."
	],
}, {
	id: 3,
	category: "experience",
	duration: "Feb 2021 - Aug 2021",
	company: "Virtoustack Softwares pvt.ltd",
	title: "Software Engineer",
	desc: [
		"Developed a feature-rich Admin Panel with React and Flutter, enabling efficient management of financial transactions and business operations by reducing manual overhead by 30%.",
		"Created cross-platform UIs for 30+ screens using Flutter, accelerating time-to-market by 50%.",
		"Enhanced performance and scalability with efficient state management and reusable components in both React and Flutter.",
		"Ensured seamless frontend-backend integration through RESTful APIs with minimal load times."
	],
}, {
	id: 4,
	category: "experience",
	duration: "Feb 2020 - Jan 2020",
	title: "Software Developer Intern",
	company: "Espares Matrix pvt.ltd",
	desc: [
		"Developed front-end UI modules for internal projects, streamlining development processes.",
		"Explored HTML, CSS, Javascript, React expanding software engineering expertise.",
		"Involving in building multiple UI components from design stage to production.",
		"Implemented a streamlined workflows for day-to-day tasks, troubleshooting technical issues & resolved bugs, delivered enhancements, conducted thorough unit testing & debugging."
	],
},
];

const educationData = [
	{
		id: 1,
		category: "education",
		duration: "2016 - 2019",
		title: "B.E ~ Computer Engineering",
		desc: [
			"Savitribai Phule Pune University, Pune",]
	},
	{
		id: 2,
		category: "education",
		duration: "2013 - 2016",
		title: "Diploma ~ Computer Engineering",
		desc: "Aissms Polytechnic, Pune"
	},
	{
		id: 3,
		category: "education",
		duration: "2003-2013",
		title: "School",
		desc: "Stella Maris High School, Pune"
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
					<div className='relative lg:w-[50%] w-full '>
						<div className='text-white  bg-blue-container lg:mb-10 flex flex-col gap-5 lg:gap-14 py-6 px-5 lg:px-8 lg:py-10 h-fit overflow-hidden relative rounded-3xl'>
							{
								workData.map((item) => (
									<div key={item.id} className='pl-9 lg:pl-12 space-y-3 relative' >
										<MdOutlineWorkOutline size={'40px'} className='absolute top-2 -left-[10px] bg-blue-container py-2 z-[10] text-red-color' />
										<div data-aos="fade-up" data-aos-delay={'100'} className='flex justify-between flex-col lg:flex-row gap-1'>
											<span className='text-grey-color  text-[16px]'>{item.duration}</span>
											<span className='text-grey-color text-[16px]'>@{item.company}</span>
										</div>
										<h3 data-aos="fade-up" data-aos-delay={'300'} className='font-bold text-xl'>{item.title}</h3>
										{Array.isArray(item.desc) ? (
											<ul data-aos="fade-up" data-aos-delay={'500'} className='list-disc ml-5 text-[18px] font-light'>
												{item.desc.map((point, idx) => (
													<li key={idx}>{point}</li>
												))}
											</ul>
										) : (
											<p data-aos="fade-up" data-aos-delay={'500'} className=' text-[18px] font-light'>{item.desc}</p>
										)}
									</div>
								))
							}
							<span className='absolute w-[1px] bg-red-color top-[42px] lg:top-[82px] bottom-[40px] left-[30px] lg:left-[40px] '></span>
						</div>
					</div>

					{/* Education */}

					<div className='relative lg:w-[50%] w-full'>
						<div className='text-white bg-blue-container lg:mb-10 flex flex-col gap-5 lg:gap-14 py-6 px-5 lg:px-8 lg:py-10 h-fit overflow-hidden relative rounded-3xl'>
							{
								educationData.map((item) => {
									return <div key={item.id} className='pl-9 lg:pl-12 space-y-3 relative' >
										< SlGraduation size={'40px'} className='absolute top-2 -left-[10px] bg-blue-container py-2 z-[10] text-red-color' />
										<div data-aos="fade-up" data-aos-delay={'300'}>
											<span className='text-grey-color text-[16px]'>{item.duration}</span>
										</div>
										<h3 data-aos="fade-up" data-aos-delay={'400'} className='font-bold text-xl'>{item.title}</h3>
										<p data-aos="fade-up" data-aos-delay={'500'} className=' text-[18px] font-light'>{item.desc}</p>
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