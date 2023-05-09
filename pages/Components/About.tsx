import Image from 'next/image'
import EDA1 from '../../public/EDA-1.jpg'
import EDA2 from '../../public/EDA-2.jpg'

export default function About() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          A bit
          <span className="text-violet-700 dark:text-amber-300"> about </span>
          me
        </p>
        <p>I love the outdoors, and am super passionate about tech</p>
        <div className="flex justify-center items-center my-8 md:my-12">
          <div className="relative w-1/2 md:w-1/3 mr-4">
            <Image
              alt="testHello"
              className="rounded-full"
              width={300}
              height={300}
              src={EDA1}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="relative w-1/2 md:w-1/3 ml-4">
            <Image
              alt="testHello"
              className="rounded-tr-lg"
              width={300}
              height={300}
              src={EDA2}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
