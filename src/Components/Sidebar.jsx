import React, { useState } from 'react';
import { IoHomeOutline, IoClose } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoLayersOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import photo from "../assets/photo.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import ReactLogo from "../Components/ReactLogo.jsx";

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

const Sidebar = ({ menuOpen, toggleMenu }) => {
	const [currentMenuItem, setCurrentMenuItem] = useState(0);

	const handleMenuItemClick = (index) => {
		setCurrentMenuItem(index);
		toggleMenu();
	};

	return (
		<div className={`fixed top-0 left-0 h-screen bg-[#081328] p-8 z-50 transform lg:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-full lg:w-1/5 lg:flex lg:flex-col lg:justify-between lg:items-center border-r border-[#5B5A6A] flex flex-col justify-between items-center`}>
			<IoClose onClick={toggleMenu} className={`hover:text-red-color text-white absolute top-5 right-6 cursor-pointer lg:hidden ${menuOpen ? '' : 'hidden'}`} size={35} />
			<div className='flex flex-col items-center justify-center gap-3'>
				<img className='h-40' src={photo} />
				<div className='flex items-center justify-center gap-2'>
					<div className='bg-[#6eda3f] animate-pulse h-2 w-2 rounded-full'></div>
					<span className='text-grey-color text-md'>I'm available for hire.</span>
				</div>
				<ul className='space-y-2 my-2 text-white text-sm lg:text-md'>
					<li className='flex items-center justify-center gap-[6px]'> <span><IoLocationOutline size={'18px'} className="text-yellow-color" /></span> Pune, India</li>
					<li className='flex items-center justify-center gap-[6px]'> <span><IoMdMail size={'18px'} className='text-yellow-color' /></span> Vickygidvir@gmail.com</li>
				</ul>
			</div>
			<ul className='flex flex-col gap-5'>
				{
					sidebarItems.map((item, index) => (
						<li key={item.id} onClick={() => handleMenuItemClick(index)}>
							<a href={item.path} className={`text-[18px] lg:text-[16px]   font-bold ${currentMenuItem === index ? 'text-yellow-color' : 'text-white'} flex items-center gap-4 hover:text-yellow-color hover:cursor-pointer`}>
								<span className='text-yellow-color text-[1.2rem]'>{item.icon}</span>{item.name}
							</a>
						</li>
					))
				}
			</ul>
			<div className='text-grey-color text-sm flex space-x-1 items-center justify-center'>
				<span>© 2024 Vix | Crafted with </span>
				<ReactLogo />
			</div>
		</div>
	);
};

export default Sidebar;
