import React from 'react';

const Resume = () => {
	return (
		<section className="mb-20 lg:mb-56 sm:w-[450px] lg:w-[725px] ">
			<h2 className="text-[40px] mb-10 sm:w-[343px] lg:w-[706px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px] font-bold tracking-[-1.14px] leading-[40px] text-center sm:text-start">
				Nice to meet you!
				<br className="hidden sm:flex" /> I’m{' '}
				<span className="border-b-4 border-b-teal-300">Anna Dominguez</span>.
			</h2>
			<p className="text-[#D9D9D9] mb-10 text-center sm:w-[343px] lg:w-[445px] sm:text-start leading-[26px]">
				Full Stack Developer based in France, I craft accessible and
				user-centered web applications.
				<br />
				Beyond coding, I bring a strong focus on collaboration, empathy, and
				creativity. I love building interfaces that are meaningful, beautiful,
				and inclusive. <br />
				My passion for music, art, and scuba diving fuels my approach to
				development—blending precision with inspiration and a constant desire to
				explore new ideas.
			</p>
			<a className="btn-primary" href="#contact">
				Contact me
			</a>
		</section>
	);
};

export default Resume;
