import Image from 'next/image'

import Project1Small from '../../public/images/thumbnail-project-1-small.webp'
import Project1Large from '../../public/images/thumbnail-project-1-large.webp'
import Project2Small from '../../public/images/thumbnail-project-2-small.webp'
import Project2Large from '../../public/images/thumbnail-project-2-large.webp'
import Project3Small from '../../public/images/thumbnail-project-3-small.webp'
import Project3Large from '../../public/images/thumbnail-project-3-large.webp'
import Project4Small from '../../public/images/thumbnail-project-4-small.webp'
import Project4Large from '../../public/images/thumbnail-project-4-large.webp'
import Project5Small from '../../public/images/thumbnail-project-5-small.webp'
import Project5Large from '../../public/images/thumbnail-project-5-large.webp'
import Project6Small from '../../public/images/thumbnail-project-6-small.webp'
import Project6Large from '../../public/images/thumbnail-project-6-large.webp'

const Projects = () => {
  return (
    <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 lg:gap-x-7 lg:gap-y-16 uppercase justify-center">
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            alt="Design Portfolio"
            className="max-sm:hidden"
            src={Project1Large}
          />
          <Image
            alt="Design Portfolio"
            className="sm:hidden"
            src={Project1Small}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Design portfolio</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            alt="E-learning landing page"
            className="max-sm:hidden"
            src={Project2Large}
          />
          <Image
            alt="E-learning landing page"
            className="sm:hidden"
            src={Project2Small}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">E-learning landing page</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            alt="Todo web app"
            className="max-sm:hidden"
            src={Project3Large}
          />
          <Image alt="Todo web app" className="sm:hidden" src={Project3Small} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Todo web app</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            alt="Entertainment web app"
            className="max-sm:hidden"
            src={Project4Large}
          />
          <Image
            alt="Entertainment web app"
            className="sm:hidden"
            src={Project4Small}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Entertainment web app</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
      <div className="text-left">
        <div className="lg:relative group">
          <Image
            alt="Memory Game"
            className="max-sm:hidden"
            src={Project5Large}
          />
          <Image alt="Memory Game" className="sm:hidden" src={Project5Small} />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Memory Game</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
      <div className="text-left">
        <div className="relative group">
          <Image
            alt="Art Gallery Showcase"
            className="max-sm:hidden"
            src={Project6Large}
          />
          <Image
            alt="Art Gallery Showcase"
            className="sm:hidden"
            src={Project6Small}
          />
          <div className="max-lg:invisible hidden group-hover:grid absolute bg-black opacity-75 top-0 left-0 right-0 bottom-0 content-center justify-center">
            <button className="btn-primary mb-12">View Project</button>
            <button className="btn-primary">View Code</button>
          </div>
        </div>
        <div className="mt-5 text-headingXS">Art gallery showcase</div>
        <div className="text-grey grid grid-flow-col auto-cols-min gap-x-2 text-bodyS">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
        <div className="mt-5 grid grid-flow-col auto-cols-max gap-x-7 lg:hidden">
          <button className="btn-primary">View Project</button>
          <button className="btn-primary">View Code</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
