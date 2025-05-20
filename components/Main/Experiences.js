import React from 'react';

const expericieences = [
	{
		title: 'FullStack Engineer',
		company: 'IACrea',
		date: 'january 2025 - may 2025',
		description: [
			'Scraping & SEO: Automated retrieval of agency listings by city using the Google Places API, with integration into an interactive map page to enhance SEO.',
			'Online Payments: Implementation of an annual/monthly pricing bundle with Stripe, including subscription management.',
			'Image Processing: Development of a tool that allows users to change wall colors in an image based on a RAL color reference (Bricomarché project).',
		],
		link: 'https://www.iacrea.com/',
	},
	{
		title: 'FullStack Engineer',
		company: 'AgroLeague',
		date: 'july 2022 - january 2023',
		description: [
			'Optimization of the mobile application using React Native.',
			'Implementation of new features to enhance the user experience.',
			'Bug fixing and overall performance improvements of the application.',
			'Design and maintenance of the backend API with NodeJS.',
			'Integration of Prisma to interact with the MongoDB database using GraphQL.',
			'Managing CRUD operations and optimizing queries to ensure optimal performance.',
			'Development of the web user interface using ReactJS.',
			'Utilization of Redux for state management, ensuring a smooth and responsive interface.',
			'Integration of new features and bug fixes to enhance the user experience.',
			'Collaboration with the development team to troubleshoot technical issues and deploy necessary fixes.',
		],
		link: 'https://www.agro-league.com/',
	},
	{
		title: 'FullStack Engineer',
		company: 'ViceVersa',
		date: 'january 2022 - june 2022',
		description: [
			"Worked as a FullStack Developer on Viceversa's single page application, contributing to both frontend and backend.",
			'Integrated new features and resolved bugs to improve the functionality and reliability of the application.',
			'Developed the backend using NodeJS and implemented unit tests with Mocha/Chai to ensure code quality and reliability.',
			'Managed and optimized the MongoDB database using Mongoose for seamless data interactions.',
			'Built and maintained the frontend with ReactJS, utilizing Redux and redux-sagas for efficient state management.',
			'Conducted component testing using Storybook to ensure UI consistency and catch issues early in the development process.',
			'Created and utilized AWS Lambda functions to handle serverless tasks, communicating with S3 and MongoDB for scalable and cost-effective solutions.',
			'Began working with ThreeJS to develop and enhance a 3D viewer, gaining experience in 3D web technologies.',
		],
		link: 'https://www.linkedin.com/company/viceversaweb3/',
	},
	{
		title: 'IT/SI/Pedagogy/FullStack Engineer',
		company: '42 Madrid',
		date: 'august 2019 - august 2020',
		description: [
			'Participated in the launch of the 42 campus in Madrid for a duration of one year, overseeing the setup of infrastructure and educational processes.',
			'Developed and implemented the unique pedagogy of 42, ensuring the effective integration and use of all necessary tools for students.',
			'Managed and maintained a cluster of 300 computers, ensuring their proper functioning and availability for students.',
			'Used LaTeX to generate PDF documents.',
			'Developed APIs and websites using Ruby and ReactJS.',
			'Created internal tools in Python to automate tasks and improve campus management processes.',
			'Retrieved, processed, and analyzed internal data to enhance decision-making and educational processes.',
		],
		link: 'https://www.42madrid.com/',
	},
	{
		title: 'FullStack Engineer',
		company: 'Gofer',
		date: 'january 2018 - july 2028',
		description: [
			'Worked as a FullStack developer using NodeJS, ReactJS, HTML, CSS, GraphQL, and Redux.',
			'Integrated the Zoho API for various functionalities.',
			'Employed an agile approach to manage development, ensuring efficient just-in-time workflow management in response to growing activity.',
			'Refactored and updated legacy code by adopting Test-Driven Development (TDD) and upgrading code to ES6 to enhance quality and maintainability.',
			'Automated internal notifications using the Slack API and set up user reminder messages to improve communication and operational efficiency.',
			'Automated email dispatch, generating emails from data processing for weekly, monthly, and quarterly reports.',
		],
		link: 'https://www.gofer.fr/',
	},
];

const Experiences = () => {
	return (
		<section className="flex flex-col mt-10 border-t border-t-white">
			{expericieences.map((experience, index) => (
				<div
					key={experience.company}
					className="flex flex-col max-w-xl gap-4 py-10 mx-auto "
				>
					<h3 className="text-[32px] sm:text-[48px] sm:tracking-[-1.5px] tracking-[-1px] font-bold">
						{experience.title}
					</h3>
					<div className="flex items-center justify-between">
						<a
							className="btn-primary"
							href={experience.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{experience.company.toUpperCase()}
						</a>
						<p className="text-sm text-[#D9D9D9]">{experience.date}</p>
					</div>
					<ul className="list-disc list-inside text-[#D9D9D9]">
						{experience.description.map((elem, index) => (
							<li key={index}>{elem}</li>
						))}
					</ul>
				</div>
			))}
			<a className="mx-auto btn-primary w-fit" href="#contact">
				Contact me
			</a>
		</section>
	);
};

export default Experiences;
