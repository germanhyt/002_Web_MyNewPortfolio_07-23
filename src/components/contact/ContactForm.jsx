import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_988p1xn', 'template_twd2ypu', form.current, '5il5XPnUwwcjNxkaM')
			.then((result) => {
				console.log(result.text);
				e.target.reset(); //reset inputs of form

			}, (error) => {
				console.log(error.text);
			});
	};

	// const form = useRef();

	// const sendEmail = (e) => {
	//   e.preventDefault();

	//   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
	// 	.then((result) => {
	// 		console.log(result.text);
	// 	}, (error) => {
	// 		console.log(error.text);
	// 	});
	// };

	return (
		// Modolo de form de EmailJS
		// <label>Name</label>
		// <input type="text" name="user_name" />
		// <label>Email</label>
		// <input type="email" name="user_email" />
		// <label>Message</label>
		// <textarea name="message" />
		// <input type="submit" value="Send" />
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					// onSubmit={(e) => {
					// 	e.preventDefault();
					// }}
					ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-center text-primary-dark dark:text-primary-light text-2xl mb-8">
						Formulario de contacto
					</p>
					<FormInput
						inputLabel="Nombres"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="user_name"
						placeholderText="Tu nombre completo"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="user_email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Asunto"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Asunto"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Mensaje
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							style={{ resize: 'none' }}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-[#0123E7] hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Enviar mensaje"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
		// <div className="w-full lg:w-1/2">
		// 	<div className="leading-loose">
		// 		<form
		// 			onSubmit={(e) => {
		// 				e.preventDefault();
		// 			}}
		// 			className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		// 		>
		// 			<p className="font-general-medium text-center text-primary-dark dark:text-primary-light text-2xl mb-8">
		// 				Formulario de contacto
		// 			</p>
		// 			<FormInput
		// 				inputLabel="Nombres"
		// 				labelFor="name"
		// 				inputType="text"
		// 				inputId="name"
		// 				inputName="name"
		// 				placeholderText="Tu nombre completo"
		// 				ariaLabelName="Name"
		// 			/>
		// 			<FormInput
		// 				inputLabel="Email"
		// 				labelFor="email"
		// 				inputType="email"
		// 				inputId="email"
		// 				inputName="email"
		// 				placeholderText="Your email"
		// 				ariaLabelName="Email"
		// 			/>
		// 			<FormInput
		// 				inputLabel="Asunto"
		// 				labelFor="subject"
		// 				inputType="text"
		// 				inputId="subject"
		// 				inputName="subject"
		// 				placeholderText="Asunto"
		// 				ariaLabelName="Subject"
		// 			/>

		// 			<div className="mt-6">
		// 				<label
		// 					className="block text-lg text-primary-dark dark:text-primary-light mb-2"
		// 					htmlFor="message"
		// 				>
		// 					Mensaje
		// 				</label>
		// 				<textarea
		// 					className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
		// 					id="message"
		// 					name="message"
		// 					cols="14"
		// 					rows="6"
		// 					aria-label="Message"
		// 					style={{resize:'none'}}
		// 				></textarea>
		// 			</div>

		// 			<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-[#0123E7] hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
		// 				<Button
		// 					title="Enviar mensaje"
		// 					type="submit"
		// 					aria-label="Send Message"
		// 				/>
		// 			</div>
		// 		</form>
		// 	</div>
		// </div>
	);
};

export default ContactForm;
