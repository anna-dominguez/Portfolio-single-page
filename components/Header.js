import Image from 'next/image'

import ProfileMobile from '../public/images/image-profile-mobile.webp'
import ProfileTablet from '../public/images/image-profile-tablet.webp'
import ProfileDesktop from '../public/images/image-profile-desktop.webp'
import Banner from './Banner'

const Header = () => {
  return (
    <header className="relative w-44 sm:w-full pt-10 sm:px-10 lg:px-40 flex flex-col">
      <Banner />
      <Image
        placeholder="blur"
        className="absolute sm:hidden top-0 z-0"
        alt="Profile picture"
        width="175"
        height="242"
        src={ProfileMobile}
      />
      <Image
        placeholder="blur"
        className="absolute lg:hidden max-sm:hidden top-0 right-0 z-0"
        alt="Profile picture"
        width="322"
        height="600"
        src={ProfileTablet}
      />
      <Image
        placeholder="blur"
        className="absolute max-lg:hidden top-0 right-40 z-0"
        alt="Profile picture"
        width="445"
        height="720"
        src={ProfileDesktop}
      />
    </header>
  )
}

export default Header
