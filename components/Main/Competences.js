const competences = [
	{
		title: 'HTML',
		experience: '5 years of experience',
	},
	{
		title: 'CSS',
		experience: '5 years of experience',
	},
	{
		title: 'SASS',
		experience: '5 years of experience',
	},
	{
		title: 'TailwindCSS',
		experience: '3 years of experience',
	},
	{
		title: 'React',
		experience: '5 years of experience',
	},
	{
		title: 'Next',
		experience: '3 years of experience',
	},
	{
		title: 'Node',
		experience: '5 years of experience',
	},
	{
		title: 'Express',
		experience: '5 years of experience',
	},
];

const Competences = () => {
	return (
		<section className="grid grid-cols-1 gap-6 py-10 mt-10 border-t lg:mt-40 border-t-white sm:grid-cols-2 md:grid-cols-3">
			{competences.map((competence) => (
				<div
					key={competence.title}
					className="flex flex-col items-center justify-center md:items-start gap-[1px]"
				>
					<h3 className="text-[32px] sm:text-[48px] sm:tracking-[-1.5px] tracking-[-1px] font-bold">
						{competence.title}
					</h3>
					<p className="text-sm text-[#D9D9D9]">{competence.experience}</p>
				</div>
			))}
		</section>
	);
};

export default Competences;
