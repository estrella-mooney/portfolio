import Head from 'next/head'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import Link from 'next/link'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'
import me4 from '../public/me4.png'
import wanderLust from '../public/wanderlust.png'
import buddy from '../public/buddy.png'
import desk from '../public/desk.png'
import Intro from './intro'

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
      <main className="bg-indigo-100  dark:bg-gray-900  min-h-screen md:px-28 lg:px-48 xl:px-10 2xl:px-7">
        {/* <section className="min-h-screen"> */}
        <section className="mb-24 sm:mb-16">
          <nav className="py-10 mb-4 flex justify-between  dark:text-white">
            <h1 className="font-semibold text-2xl">Estrella</h1>

            <ul className="flex items-center">
              <li className="pr-5">
                <a href="../estrella-CV.pdf" target="_blank">
                  <button>CV</button>
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          {/* <nav className="flex justify-start sm:flex-col">
            <ul className="flex sm:justify-evenly dark:text-gray-300">
              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a href="https://github.com/estrella-mooney" target="_blank">
                  Github
                </a>
              </li>

              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a href="mailto:thestarshine@protonmail.com" target="_blank">
                  Email
                </a>
              </li>
              <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline hover:duration-75">
                <a
                  href="https://www.linkedin.com/in/estrella-mooney-698989273/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav> */}
        </section>
        <Intro />

        <section className="py-10">
          <div>
            <p className=" font-bold mb-3 text-teal-500">Personal Projects</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-5 mb-36">
            {/* <div className=" bg-gray-400 flex-1 p-7 rounded-lg my-6 max-w-sm hover:shadow-lg transition ease-in-out hover:bg-gray-400 duration-200 hover:text-contrast-white  text-gray-800 dark:text-gray-200 "> */}
            <div className=" bg-gray-300 dark:hover:bg-gray-600 flex-1 p-7 rounded-lg my-6 max-w-sm hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white  text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <Image
                alt="yes"
                src={wanderLust}
                width={400}
                height={215}
                decoding="async"
                className="mb-3 rounded-lg"
                loading="lazy"
              ></Image>
              <h1 className="text-lg font-semibold mb-5">WanderLust</h1>
              <p className="font-light mb-5">
                A web app for kiwis to keep a record of their bucket list hikes
              </p>

              <a
                href="https://github.com/estrella-mooney/wanderLust"
                title="GitHub"
              >
                <svg
                  aria-hidden="true"
                  className="octicon octicon-mark-github"
                  height="24"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
              <div className="pt-2">
                <a
                  href="https://wanderlust-estrella.devacademy.nz/"
                  title="Wunderlust"
                >
                  <p>View Wunderlust</p>
                </a>
              </div>
            </div>
            <div className=" bg-gray-300 dark:hover:bg-gray-600 flex-1 p-7 rounded-lg my-6 max-w-sm hover:shadow-lg transition ease-in-out  duration-200 hover:text-contrast-white  text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <Image
                alt="yes"
                src={buddy}
                width={400}
                height={215}
                decoding="async"
                className="mb-3 rounded-lg"
                loading="lazy"
              ></Image>
              <h1 className="text-lg font-semibold mb-5">Buddy</h1>
              <p className="font-light mb-5">
                An app helping newcomers in Wellington, NZ connect with locals
                for cultural immersion and guidance. (Final Group project at Dev
                Academy).
              </p>
              <a href="https://github.com/kahu-2023/buddy" title="GitHub">
                <svg
                  aria-hidden="true"
                  className="octicon octicon-mark-github"
                  height="24"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
              <div className="pt-2">
                <a href="https://buddy.devacademy.nz/" title="Buddy">
                  <p>View Buddy</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
