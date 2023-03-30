import Image from 'next/image'

import Profile from '../public/images/image-profile.jpeg'
import Banner from './Banner'

const Header = () => {
  return (
    <header className="relative w-44 sm:w-full pt-10 sm:px-10 lg:px-40 flex flex-col">
      <Banner />
      <Image
        placeholder="blur"
        className="absolute sm:hidden top-20 z-0"
        alt="Profile picture"
        width="175"
        height="242"
        src={Profile}
      />
      <Image
        placeholder="blur"
        className="absolute lg:hidden max-sm:hidden top-0 right-0 z-0"
        alt="Profile picture"
        width="322"
        height="600"
        src={Profile}
      />
      <Image
        placeholder="blur"
        className="absolute max-lg:hidden top-0 right-40 z-0"
        alt="Profile picture"
        width="445"
        height="720"
        src={Profile}
      />
    </header>
  )
}

export default Header
