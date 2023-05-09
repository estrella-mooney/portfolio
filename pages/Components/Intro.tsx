import Image from 'next/image'
import desk from '../../public/womenWorking.png'

function Intro() {
  return (
    <>
      {/* <section className=" dark:bg-gray-900"> */}
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-x-8 lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
          <div className=" place-self-center lg:col-span-7">
            {/* <h1 className=" font-bold mb-3 text-teal-500">
                Hi, my
                <br />
                name is <b>Estrella</b>
              </h1> */}
            <div className=" text-black ">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Hi, my
                <br />
                name is Estrella
              </h1>
              <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                <ul>
                  <li>
                    I&apos;m a
                    <span className="text-violet-700 dark:text-amber-300">
                      {' '}
                      fullstack developer{' '}
                    </span>
                    based in New Zealand.
                  </li>

                  <li>
                    I just finished a 17 week Full Stack Software Developer
                    bootcamp @ Dev Academy Aotearoa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image priority={true} src={desk} alt="smiling women with laptop" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
