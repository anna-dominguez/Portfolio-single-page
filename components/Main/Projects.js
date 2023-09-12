import Image from 'next/image'

import Project1 from '../../public/images/thumbnail-project-1.webp'
import Project2 from '../../public/images/thumbnail-project-2.webp'
import Project3 from '../../public/images/thumbnail-project-3.webp'
import Project4 from '../../public/images/thumbnail-project-4.webp'
import Project5 from '../../public/images/thumbnail-project-5.webp'
import Project6 from '../../public/images/thumbnail-project-6.webp'
import Project7 from '../../public/images/thumbnail-project-7.webp'
import Project8 from '../../public/images/thumbnail-project-8.webp'
import Project9 from '../../public/images/thumbnail-project-9.webp'
import Project10 from '../../public/images/thumbnail-project-10.webp'
import Project11 from '../../public/images/thumbnail-project-11.webp'
import Project12 from '../../public/images/thumbnail-project-12.webp'

const Projects = () => {
  return (
    <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 lg:gap-x-7 lg:gap-y-16 uppercase justify-center">
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="Dictionary web app" src={Project1} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://dictionary-web-app-sepia.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/dictionary-web-app"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Dictionary Web App</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://bmi-calculator-57m200mar-vesta-nna.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/dictionary-web-app"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="Body Mass Index Calculator"
            src={Project8}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://bmi-calculator-57m200mar-vesta-nna.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/BMI-Calculator"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Body Mass Index Calculator</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://ecommerce-product-page-one-gold.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/BMI-Calculator"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="E-commerce product page
"
            src={Project11}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://ecommerce-product-page-one-gold.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/ecommerce-product-page"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">E-commerce product page</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://space-tourism-mu-woad.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/ecommerce-product-page"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="Space tourism multi-page website"
            src={Project12}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://space-tourism-mu-woad.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/space-tourism"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">
          Space tourism multi-page website
        </div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://space-tourism-mu-woad.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/space-tourism"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="News Homepage" src={Project9} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://news-homepage-wine-two.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/news-homepage"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">News Homepage</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://notification-page-nine.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/news-homepage"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="Notification Page" src={Project10} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://notification-page-nine.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/notification-page"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Notification Page</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://bmi-calculator-57m200mar-vesta-nna.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/notification-page"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="Dictionary web app" src={Project7} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://age-calculator-snowy-seven.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/Age-Calculator"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Age Calculator</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://age-calculator-snowy-seven.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/Age-Calculator"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="Dictionary web app" src={Project6} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 text-center top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://multi-step-form-phi-eight.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/multi-step-form"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Multi Step Form</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>Next</div>
          <div>TailwindCSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://multi-step-form-phi-eight.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/multi-step-form"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="E-learning landing page"
            src={Project2}
          />
          <div className="max-lg:invisible text-center hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://skilled-elearning-landing-page-sage.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/Skilled-Elearning-Landing-Page"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">E-learning landing page</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://skilled-elearning-landing-page-sage.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/Skilled-Elearning-Landing-Page"
            className="btn-primary "
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="Equalizer Langing Page"
            src={Project3}
          />
          <div className="max-lg:invisible text-center hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://silver-flan-e016c2.netlify.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/equalizer-landing-page"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Equalizer Langing Page</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://silver-flan-e016c2.netlify.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/equalizer-landing-pagee"
            className="btn-primary "
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            placeholder="blur"
            alt="Entertainment web app"
            src={Project4}
          />
          <div className="max-lg:invisible text-center hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://product-preview-card-component-vesta-nna.vercel.app/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/product-preview-card-component"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">
          Product preview card component
        </div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://product-preview-card-component-vesta-nna.vercel.app/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/product-preview-card-component"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image placeholder="blur" alt="Memory Game" src={Project5} />
          <div className="max-lg:invisible text-center hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
              href="https://anna-dominguez.github.io/NFT-preview-card-component/"
              className="btn-primary mb-12"
            >
              View Project
            </a>
            <a
              target="_blank"
              href="https://github.com/anna-dominguez/NFT-preview-card-component"
              className="btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">NFT preview card</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>SASS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
            target="_blank"
            href="https://anna-dominguez.github.io/NFT-preview-card-component/"
            className="btn-primary"
          >
            View Project
          </a>
          <a
            target="_blank"
            href="https://github.com/anna-dominguez/NFT-preview-card-component"
            className="btn-primary"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
