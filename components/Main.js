import Experiences from './Main/Experiences';
import Projects from './Main/Projects';
import Resume from './Main/Resume';
import Competences from './Main/Competences';

const Main = () => {
	return (
		<main className="z-50 mx-4 text-center mt-80 sm:mt-24 lg:mt-32 sm:mx-10 lg:mx-40 sm:text-left">
			<Resume />
			<Competences />
			<Experiences />
			<section className="my-20 sm:my-24 lg:my-36">
				<div className="flex items-center justify-between mb-10 sm:mb-14 lg:mb-20">
					<h2 className="font-bold text-headingM sm:heading-XL lg:text-headingXXL tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px]">
						Projects
					</h2>
					<a className="btn-primary" href="#contact">
						Contact me
					</a>
				</div>
				<Projects />
			</section>
		</main>
	);
};

export default Main;
