import Head from 'next/head'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import Link from 'next/link'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import deved from '../public/cute.png'
import code from '../public/cute.png'
import design from '../public/cute.png'
import consulting from '../public/cute.png'
import Image from 'next/image'
import web1 from '../public/cute.png'
import web2 from '../public/desk.png'
import web4 from '../public/cute.png'
import web5 from '../public/cute.png'
import web6 from '../public/cute.png'
import me1 from '../public/me1.png'
import Card from './header'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Estrella&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"> */}
      <main className=" bg-white px-10 dark:bg-gray-900  min-h-screen md:px-28 lg:px-48 xl:px-60 2xl:px-7">
        {/* <section className="min-h-screen"> */}
        <section className="mb-24 sm:mb-16">
          <nav className="py-10 mb-4 flex justify-between  dark:text-white">
            <h1 className="font-semibold text-2xl">Estrella</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <nav className="flex justify-start sm:flex-col">
            <ul className="flex sm:justify-evenly">
              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a href="https://github.com/estrella-mooney" target="_blank">
                  Github
                </a>
              </li>
              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a href="https://github.com/estrella-mooney" target="_blank">
                  Email
                </a>
              </li>
              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a href="https://github.com/estrella-mooney" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 mb-36 sm:mb-16">
          <div className="w-96 sm:text-center sm:max-w-xs">
            <p className=" font-bold mb-3 text-green-800">Hi, my name is</p>
            <h1 className="mb-3 rainbow-text ">Estrella Mooney</h1>
            <div className=" dark:text-white">
              <p className="mb-3">
                I&apos;m a software developer based in New Zealand. I just
                finished a 17 week Full Stack Software Developer bootcam @ Dev
                Academy Aotearoa
              </p>
              <p className="mb-3">
                I&apos;m mad about the outdoors, and any free time I get you can
                catch me in the mountains.
              </p>
              <p className="mb-3">
                I&apos;m ready to dive into the world of development
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="yes"
              src={me1}
              className="md:max-w-sm sm:max-w-xs"
              loading="lazy"
              width={400}
              height={400}
            ></Image>
          </div>
        </section>
        {/* </section> */}

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Started my journey as a
              <span className="text-teal-500"> software developer </span>
              at Dev Academy. And am now ready and{' '}
              <span className="text-teal-500">excited </span>
              to get workin!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-5 mb-36">
            <div className="bg-zinc-50 flex-1 p-7 rounded-lg my-6 max-w-sm hover:shadow-lg transition ease-in-out hover:bg-accent-gold duration-200 hover:text-contrast-white  text-gray-800 dark:text-gray-200 "> 
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web1}
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="yes"
                className="rounded-lg object-cover"
                width={400}
                height={400}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
