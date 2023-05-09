import Image from 'next/image'
import EDA1 from '../../public/EDA-1.jpg'
import EDA2 from '../../public/EDA-2.jpg'
import darkAbout from '../../public/darkAbout.png'
import lightAbout from '../../public/lightAbout.png'

interface Props {
  darkMode: boolean
}

export default function About({ darkMode }: Props) {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center my-8 md:my-12">
          {darkMode ? (
            <Image
              alt="testHello"
              className=""
              width={600}
              height={600}
              src={darkAbout}
              decoding="async"
              loading="lazy"
            />
          ) : (
            <Image
              alt="testHello"
              className=""
              width={600}
              height={600}
              src={lightAbout}
              decoding="async"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  )
}
