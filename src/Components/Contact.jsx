import React from 'react'

const Contact = () => {
	return (

		<section id="contact">
			<div className='container relative my-32'>
				<h2 className='heading'>
					Get In Touch
				</h2>
				<div className='flex'>

					<div className='flex flex-col gap-3 w-[60%] bg-[url("https://jthemes.net/themes/html/bolby/demo/images/map-light.png")] bg-no-repeat'>
						<h3 className='text-white text-2xl font-bold'>Let's talk about everything!</h3>
						<p className='font-light text-white'>Don't like forms? Send me an <a href="mailto:vickygidvir@gmail.com" className='text-red-color hover:text-white cursor-pointer transition ease-linear duration-300'>email. 👋</a></p>
					</div>

					<div className='flex flex-col gap-10 w-full'>
						<div className='flex gap-5'>
							<input type="text" placeholder='Your Name' className='input' />
							<input type="text" placeholder='Email Address' className='input' />
						</div>
						<input type="text" placeholder='Subject' className='input' />
						<input type="text" placeholder='Message' className='input' />
						<div>
							<button className='btn-red'>Send Message</button>
						</div>

					</div>



				</div >
			</div >
		</section>
	)
}

export default Contact