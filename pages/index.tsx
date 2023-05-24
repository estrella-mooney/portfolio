import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import Intro from './Components/Intro'
import Projects from './Components/SecondProjects'
import Footer from './Components/Footer'
import MainProjects from './Components/MainProjects'
import About from './Components/About'

// import Navbar from './Components/Nav'

interface Project {
  title: string
  content: string
  tech_used: string
  reflection: string
}
export default function Home({ data }: { data: Project[] }) {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Estrella&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  bg-indigo-50  dark:bg-gray-900  min-h-screen sm:px-10 md:px-30 lg:px-48 xl:px-10 2xl:px-7">
        <section className="mb-24 sm:mb-16">
          <nav className="xl:py-10  flex justify-end  dark:text-white">
            {/* <h1 className="font-semibold text-2xl">Estrella</h1> */}

            <ul className="flex items-center px-4 py-8 gap-x-3 lg:gap-8 xl:gap-3 lg:py-2 ">
              <button className="pr-2 bg-amber-300 hover:bg-gray-500 dark:text-gray-900 dark:hover:text-white text-white font-bold py-2 px-2 rounded">
                <a href="../EstrellaCV.pdf" target="_blank">
                  CV
                </a>
              </button>

              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>

        {/* <Navbar /> */}
        <Intro />
        <MainProjects />
        <Projects />
        <About darkMode={darkMode} />
        <Footer />
      </main>
    </div>
  )
}
