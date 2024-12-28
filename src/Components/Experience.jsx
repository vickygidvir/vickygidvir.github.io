import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";


const workData = [{
	id: 1,
	category: "experience",
	duration: "Oct 2021 - Present",
	title: "Sr. Software Engineer ",
	company: "Cleverex Technology pvt.ltd",
	desc: "Contributed to the development of No-Code Web Application Platform that is powered by an AI to digitally transform the business without specialize expertise. Engineered a robust code generation engine in Flutter and shaped it for production. Achieved an impressive code generation time of 15-20 seconds, actively monitoring, improving and enhancing performance and user experience within tight deadlines. Adapted multiple web technologies/languages like HTML, CSS, Javascript, Reactjs, Redux, Context Api, reusable components, integration of Restful APIs for various user interface",
}, {
	id: 2,
	category: "experience",
	duration: "Feb 2021 - Aug 2021",
	company: "Virtoustack Softwares pvt.ltd",
	title: "Software Engineer",
	desc: "Contributed to the frontend development of application using React, Flutter creating an intuitive interface for business users to manage financial transactions, payments, and business operations.Engaged on the cross-platform mobile app, actively contributing to the UI development of both basic and complex UIs of 30+ screens, resulting in a 50% reduction in time-to-marketDeveloped a feature-rich Admin Panel using React, providing business administrators with tools for managing users, monitoring transactions, and generating reports in real-time.Implemented efficient state management and reusable components, enhancing performance and simplifying the development of new features.Integrated RESTful APIs for smooth communication between the frontend and backend, ensuring data consistency and quick load times. Ensured the maintenance of coding standards across the entire codebase"
}, {
	id: 3,
	category: "experience",
	duration: "Feb 2020 - Jan 2020",
	title: "Software Developer Intern",
	company: "Espares Matrix pvt.ltd",
	desc: "Developed front-end UI modules emphasizing internal projects. Explored HTML, CSS, Javascript, React expanding software engineering expertise.Implemented a streamlined workflows for day-to-day tasks, troubleshooting technical issues & resolved bugs, delivered enhancements, conducted thorough unit testing & debugging"
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
					<div className='relative lg:w-[50%] w-full '>
						<div className='text-white  bg-blue-container lg:mb-10 flex flex-col gap-5 lg:gap-14 py-6 px-5 lg:px-8 lg:py-10 h-fit overflow-hidden relative rounded-3xl'>
							{
								workData.map((item) => {
									return <div key={item.id} className='pl-9 lg:pl-12 space-y-3 relative' >
										<MdOutlineWorkOutline size={'40px'} className='absolute top-2 -left-[10px] bg-blue-container py-2 z-[10] text-red-color' />
										<div data-aos="fade-up" data-aos-delay={'100'} className='flex justify-between flex-col lg:flex-row gap-1'>
											<span className='text-grey-color  text-[16px]'>{item.duration}</span>
											<span className='text-grey-color text-[16px]'>@{item.company}</span>
										</div>
										<h3 data-aos="fade-up" data-aos-delay={'300'} className='font-bold text-xl'>{item.title}</h3>
										<p data-aos="fade-up" data-aos-delay={'500'} className=' text-[18px] font-light'>{item.desc}</p>
									</div>
								})
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