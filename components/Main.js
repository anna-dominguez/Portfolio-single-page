import Button from '@/tools/Button'
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
            Adam Keyes
          </span>
          .
        </h1>
        <div className="text-bodyS sm:text-bodyM sm:w-[425px] mb-6 sm:mb-8 lg:mb-16 text-grey">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </div>
        <button className="hover:text-green pb-2.5 cursor-pointer border-solid border-b-2 border-green text-bodyS uppercase tracking-[2.29px]">
          <a href="#contact">Contact me</a>
        </button>
      </section>
      <section className="border-y-[1px] sm:border-b-0 border-white">
        <Experiences />
      </section>
      <section className="my-20">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="font-bold text-headingM sm:heading-XL lg:text-headingXXL tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px]">
            Projects
          </h2>
          <button className="hover:text-green pb-2.5 cursor-pointer border-solid border-b-2 border-green text-bodyS uppercase tracking-[2.29px]">
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <Projects />
      </section>
    </main>
  )
}

export default Main
