import React from 'react'
import ReactLogo from './ReactLogo';

const Footer = () => {
	return (
		<div className='lg:hidden text-grey-color text-sm flex space-x-1 items-center justify-center mb-5'>
			<span >
				© 2024 Vix | Crafted with React </span>
			<ReactLogo />

		</div>
	)
}

export default Footer