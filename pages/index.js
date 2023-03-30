import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

import Rings from '../public/images/pattern-rings.svg'
import Circle from '../public/images/pattern-circle.svg'

const Home = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Image
        className="absolute top-32 sm:top-24 lg:top-32 -left-52 sm:-left-64 lg:-left-24 z-10"
        src={Rings}
      />
      <Image
        className="absolute top-64 sm:top-[471px] lg:top-[521px] -right-16 lg:left-[766px] z-10"
        src={Circle}
      />
      <Image
        className="absolute top-[1287px] sm:top-[1047px] lg:top-[1077px] -right-48 sm:-right-72"
        src={Rings}
      />
      <Image
        className="absolute top-[93%] sm:top-[3200px] lg:top-[3600px] -left-52 sm:-left-96 lg:-left-44"
        src={Rings}
      />

      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default Home
