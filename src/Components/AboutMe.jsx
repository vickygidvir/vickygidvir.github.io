import React, { useState, useEffect } from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";


const AboutMe = () => {

	const [totalExperience, setTotalExperience] = useState({ years: 0, months: 0, days: 0 });

	useEffect(() => {
		const startDate = new Date('2020-02-01');
		const currentDate = new Date();

		let years = currentDate.getFullYear() - startDate.getFullYear();
		let months = currentDate.getMonth() - startDate.getMonth();
		let days = currentDate.getDate() - startDate.getDate();

		if (days < 0) {
			months--;
			const lastMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
			days += lastMonthDays;
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		setTotalExperience({ years, months, days });
	}, []);

	return (

		<section id='about'>
			<div className='container w-screen lg:w-full relative mb-32'>
				<h1 className='heading'>
					About Me
				</h1>
				<div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
					<div data-aos="fade-down" data-aos-delay={'400'} className='relative '>
						<div className='text-white bg-blue-container rounded-3xl p-8 min-w-[300px] '>
							<div className='space-y-6 text-center'>
								<div >
									<h3 className='font-bold text-xl'>Total Experience</h3>
									<h1 className='text-9xl font-extrabold text-yellow-color'>{totalExperience.years}</h1>
									<p className='font-bold text-xl'>years</p>
								</div>

								<div className='bg-[#434268] p-3 rounded-3xl font-extrabold flex flex-row justify-center items-center gap-2'>
									<span className='text-xl text-yellow-color'>{totalExperience.months}</span>
									<span className='text-md font-thin'>Months</span>
									<span className='text-xl text-yellow-color'>{totalExperience.days}</span>
									<span className='text-md font-thin'>Days</span>
									<IoMdArrowRoundUp className='text-green-400 animate-bounce' size={'25px'} />
								</div>
							</div>
						</div>
					</div>

					<div data-aos="fade-up" data-aos-delay={'500'}>
						<div className='text-white bg-blue-container flex flex-col  px-8 py-5 lg:py-10 h-fit overflow-hidden relative rounded-3xl text:md lg:text-xl min-w-[300px]'>

							<p className='font-thin'>
								Hello! I'm Vicky Gidvir, currently working @ <b>Cleverex Technology</b>. I am a dedicated and passionate software developer with over 4 years of hands-on experience, specializing in web and mobile technologies and frameworks. Since 2020, I have been involved in crafting dynamic projects using various technologies. Proficient in databases, I seamlessly navigate from the structured elegance of MySQL to the flexible realms of MongoDB. Currently, I am expanding and transitioning my toolkit with Next.js and backend technologies.<br /><br />

								My portfolio showcases a blend of classics such as <b>HTML, CSS, Tailwind, and Javascript</b>, alongside trendsetters like <b>React.js and Flutter</b>, all harmonized by my proficiency in <b>MySQL and MongoDB</b> .<br /><br />

								Excited about the dynamic possibilities, I am eager to learn, explore more, and apply my expertise in crafting innovative solutions for future development projects while driving continuous improvement.
							</p>

						</div>
					</div>

				</div>

				<div data-aos="flip-up" data-aos-delay={'500'} className=' bg-blue-container rounded-3xl p-5 lg:p-8 mt-10 flex gap-x-10 gap-y-6 lg:gap-7 text-grey-color items-center justify-center flex-wrap'>
					<FaHtml5 size={'80px'} />
					<FaCss3Alt size={'80px'} />
					<BiLogoTailwindCss size={'80px'} />
					<IoLogoJavascript size={'80px'} />
					<FaReact size={'80px'} />
					<SiRedux size={'80px'} />
					<RiFlutterFill size={'80px'} />
					<SiDart size={'80px'} />
				</div>

			</div >
		</section>
	)
}

export default AboutMe