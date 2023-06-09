import Experiences from './Main/Experiences'
import Projects from './Main/Projects'

const Main = () => {
  return (
    <main className="z-50 mt-80 sm:mt-24 lg:mt-32 mx-4 sm:mx-10 lg:mx-40 text-center sm:text-left">
      <section className="mb-20 lg:mb-56 sm:w-[450px] lg:w-[725px] ">
        <h1 className="text-headingM sm:text-headingXL lg:text-headingXXL tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px] mb-6 sm:mb-14 lg:mb-11 font-bold">
          Nice to
          <br className="lg:hidden max-sm:hidden" /> meet you! I'm{' '}
          <span className="underline decoration-green underline-offset-8 decoration-4 sm:decoration-[6px] sm:max-md:mt-2.5">
            Anna Dominguez
          </span>
          .
        </h1>
        <div className="text-bodyS sm:text-bodyM sm:w-[425px] mb-6 sm:mb-8 lg:mb-16 text-grey">
          Based in France, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </div>
        <a className="btn-primary" href="#contact">
          Contact me
        </a>
      </section>
      <section className="border-y-[1px] sm:border-b-0 border-white">
        <Experiences />
      </section>
      <section className="my-20 sm:my-24 lg:my-36">
        <div className="mb-10 sm:mb-14 lg:mb-20 flex justify-between items-center">
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
  )
}

export default Main
