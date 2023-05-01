import Head from 'next/head'
import Link from 'next/link'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import Intro from './Components/Intro'
import Projects from './Components/Projects'

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
        <Projects />
      </main>
    </div>
  )
}
