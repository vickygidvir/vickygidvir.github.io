import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef(null);
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (isSubmitted) {
			const timer = setTimeout(() => {
				setIsSubmitted(false);
			}, 8000); // Hide message after 5 seconds

			return () => clearTimeout(timer); // Cleanup the timer on component unmount
		}
	}, [isSubmitted]);

	const sendEmail = (e) => {
		e.preventDefault();

		// Validation logic
		const name = e.target.user_name.value.trim();
		const email = e.target.user_mail.value.trim();
		const subject = e.target.subject.value.trim();
		const message = e.target.message.value.trim();

		let validationErrors = {}; // Object to store errors

		if (name.length === 0) {
			validationErrors.name = 'Please enter your name.';
		}

		if (email.length === 0) {
			validationErrors.email = 'Please enter your email address.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			validationErrors.email = 'Please enter a valid email address.';
		}

		if (subject.length === 0) {
			validationErrors.subject = 'Please enter a subject.';
		}

		if (message.length === 0) {
			validationErrors.message = 'Please enter a message.';
		}

		setErrors(validationErrors); // Update state with errors

		// Submit only if there are no errors
		if (Object.keys(validationErrors).length === 0) {
			emailjs
				.sendForm(
					import.meta.env.REACT_APP_SERVICE_ID,
					import.meta.env.REACT_APP_TEMPLATE_ID,
					form.current,
					import.meta.env.REACT_APP_EMAILJS_KEY
				)
				.then(
					() => {
						console.log('SUCCESS!');
						setIsSubmitted(true);
						form.current.reset(); // Reset form fields
						setErrors({}); // Clear errors
					},
					(error) => {
						console.log('FAILED...', error.text);
					}
				);
		}
	};

	return (
		<section id="contact">
			<div className='container relative lg:my-32 my-14'>
				<h2 className='heading'>Get In Touch</h2>
				<div className='flex lg:flex-row flex-col gap-5 lg:gap-10'>
					<div data-aos="fade-down" data-aos-delay={'400'} className='flex flex-col gap-3 lg:w-[60%] h-48 w-full bg-[url("https://jthemes.net/themes/html/bolby/demo/images/map-light.png")] bg-no-repeat'>
						<h3 className='text-white text-2xl font-bold'>Let's talk about everything!</h3>
						<p className='font-light text-white'>
							Don't like forms? Send me an <a href="mailto:vickygidvir@gmail.com" className='text-red-color hover:text-white cursor-pointer transition ease-linear duration-300'>email. 👋</a>
						</p>
					</div>
					<div data-aos="fade-up" data-aos-delay={'500'} className='flex flex-col gap-5 lg:gap-10 w-full'>
						{isSubmitted && <p className='text-green-500'>Thank you for your message! We will get back to you soon.</p>}
						<form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8'>
							<div className='flex gap-5'>
								<div className='w-full'>
									<input
										type="text"
										name="user_name"
										placeholder='Your Name'
										className='input mb-2'
										aria-invalid={errors.name ? 'true' : 'false'}
										aria-describedby="name-error"
									/>
									{errors.name && <span id="name-error" className="error-message text-red-color">{errors.name}</span>}
								</div>
								<div className='w-full'>
									<input
										type="text"
										name="user_mail"
										placeholder='Email Address'
										className='input mb-2'
										aria-invalid={errors.email ? 'true' : 'false'}
										aria-describedby="email-error"
									/>
									{errors.email && <span id="email-error" className="error-message text-red-color">{errors.email}</span>}
								</div>
							</div>
							<div className='w-full'>
								<input
									type="text"
									name="subject"
									placeholder='Subject'
									className='input mb-2'
									aria-invalid={errors.subject ? 'true' : 'false'}
									aria-describedby="subject-error"
								/>
								{errors.subject && <span id="subject-error" className="error-message text-red-color">{errors.subject}</span>}
							</div>
							<div className='w-full'>
								<textarea
									placeholder='Message'
									name="message"
									className='input pl-8 mb-2 text'
									aria-invalid={errors.message ? 'true' : 'false'}
									aria-describedby="message-error"
								/>
								{errors.message && <span id="message-error" className="error-message text-red-color">{errors.message}</span>}
							</div>
							<div>
								<button type="submit" value="Send" className='btn-red'>Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
