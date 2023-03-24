import Contact from './Contact'
import Banner from '../Banner'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-darkGrey w-full text-center pt-20 px-4 sm:px-10 lg:px-40"
    >
      <div className="grid lg:grid-cols-2 lg:text-left sm:w-[445px] lg:w-full sm:max-lg:mx-auto">
        <div>
          <h2 className="mb-5 lg:mb-9 font-bold text-headingM sm:heading-XL lg:text-headingXXL tracking-[-1.14px] sm:tracking-[-2.05px] lg:tracking-[-2.5px]">
            Contact
          </h2>
          <div className="text-grey mx-auto lg:mx-0 text-bodyS md:text-bodyM sm:w-[445px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </div>
        </div>
        <Contact />
      </div>
      <div className="flex justify-center mt-20 lg:mt-24 pt-10 lg:pt-12 mb-16 lg:mb-24 border-t-[1px] border-white">
        <div className="w-40 sm:w-full">
          <Banner />
        </div>
      </div>
    </footer>
  )
}

export default Footer
