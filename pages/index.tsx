import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import Intro from './Components/Intro'
import Projects from './Components/Projects'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Estrella&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-indigo-100  dark:bg-gray-900  min-h-screen md:px-28 lg:px-48 xl:px-10 2xl:px-7">
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
        </section>
        <Intro />
        <Projects />
      </main>
    </div>
  )
}
