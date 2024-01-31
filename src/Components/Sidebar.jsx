import React, { useState } from 'react'

import { IoHomeOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoLayersOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import photo from "../assets/photo.png"
import { IoLocationOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const sidebarItems = [{
	id: 1,
	name: "Home",
	path: "#home",
	icon: <IoHomeOutline />
}, {
	id: 2,
	name: "About",
	path: "#about",
	icon: <IoIosPerson />
}, {
	id: 3,
	name: "Experience",
	path: "#experience",
	icon: <BsSuitcaseLgFill />
}, {
	id: 4,
	name: "Projects",
	path: "#projects",
	icon: <IoLayersOutline />
}, {
	id: 5,
	name: "Contact",
	path: "#contact",
	icon: <LuMessagesSquare />

}];

const Sidebar = () => {

	const [currentMenuItem, setCurrentMenuItem] = useState(0);

	return (

		<div className='w-1/5 fixed top-0 left-0 h-screen border-r border-[#5B5A6A] flex flex-col justify-between items-center p-8 z-[100]'>

			<div className='flex flex-col items-center justify-center gap-3'>
				<img className='h-40' src={photo} />


				<div className='flex items-center justify-center gap-2'>
					<div className='bg-[#6eda3f] animate-pulse h-2 w-2 rounded-full '>

					</div>
					<span className='text-grey-color text-md'>I'm available for hire.</span>
				</div>


				<ul className='space-y-2 my-2 text-white  text-sm'>
					<li className='flex items-center justify-center gap-[6px]'> <span><IoLocationOutline size={'18px'} className="text-yellow-color" /></span> Pune, India</li>
					<li className='flex items-center justify-center gap-[6px]'> <span><IoMdMail size={'18px'} className='text-yellow-color' /></span> Vickygidvir@gmail.com</li>
				</ul>
			</div>


			<ul className='flex flex-col gap-5'>
				{
					sidebarItems.map((item, index) => {


						return <li  onClick={() => setCurrentMenuItem(index)}>< a href={item.path} key={item.id} className={`text-[17px] font-bold ${currentMenuItem === index ? "text-yellow-color " : "text-white"} flex items-center gap-4 hover:text-yellow-color hover:cursor-pointer`}><span className='text-yellow-color text-[1.2rem] '>{item.icon}</span >{item.name}</a></li>
					})
				}
			</ul >
			<div className='text-grey-color text-sm'>
				© 2024 Vix | All Rights Reserved
			</div>
		</div >
	)
}

export default Sidebar