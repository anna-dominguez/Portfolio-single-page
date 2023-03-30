import Image from 'next/image'

import Project1 from '../../public/images/thumbnail-project-1.webp'
import Project2 from '../../public/images/thumbnail-project-2.webp'
import Project3 from '../../public/images/thumbnail-project-3.webp'
import Project4 from '../../public/images/thumbnail-project-4.webp'
import Project5 from '../../public/images/thumbnail-project-5.webp'
// import Project6 from '../../public/images/thumbnail-project-6.webp'

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
            href="https://dictionary-web-app-sepia.vercel.app/"
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
        <div className="mt-5 text-headingXS">Memory Game</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
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
      {/* <div className="text-left">
        <div className="relative group">
          <Image placeholder="blur" alt="Art Gallery Showcase" src={Project6} />
          <div className="max-lg:invisible text-center hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <a
              target="_blank"
             href="" className="btn-primary mb-12">
              View Project
            </a>
            <a
              target="_blank"
             href="" className="btn-primary ">
              View Code
            </a>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Art gallery showcase</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <a
              target="_blank"
           href="" className="btn-primary">
            View Project
          </a>
          <a
              target="_blank"
           href="" className="btn-primary">
            View Code
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Projects
