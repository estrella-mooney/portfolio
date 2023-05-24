import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import buddy2 from '../../public/buddy2.png'

import wisdom from '../../public/wisdom.png'
import showmethemoney from '../../public/showmethemoney.png'
import sweetornot from '../../public/sweetornot.png'
import dives from '../../public/dives.png'
import GithubIcon from './GithubIcon'
import { useState } from 'react'

import Link from 'next/link'

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <div className=" max-w-screen-xl px-4 py-8 mx-auto gap-x-8 lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
        <section className="">
          <div>
            <p className=" font-bold mb-3 text-violet-700 dark:text-amber-300">
              Team Projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 sm:gap-5  ">
            <div className="bg-indigo-100 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <Image
                alt="yes"
                src={dives}
                width={400}
                height={215}
                decoding="async"
                className="mb-3 rounded-lg"
                loading="lazy"
              ></Image>
              <h1 className="text-lg font-semibold mb-5">Deep Blue Diving</h1>
              <p className="font-light mb-5">
                An app to store and create scheduled dive trips
              </p>

              <div className="flex items-center">
                <a
                  href="https://github.com/estrella-mooney/deep-blue-diving"
                  title="GitHub"
                  target="_blank"
                >
                  <GithubIcon darkMode={darkMode} />
                </a>
              </div>
            </div>

            <div className="bg-indigo-100 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <Image
                alt="yes"
                src={showmethemoney}
                width={400}
                height={215}
                decoding="async"
                className="mb-3 rounded-lg"
                loading="lazy"
              ></Image>
              <h1 className="text-lg font-semibold mb-5">Show Me The Money</h1>
              <p className="font-light mb-5">
                An app to calculate how much your meetings are really costing
              </p>{' '}
              <div className="flex items-center">
                <a
                  href="https://github.com/estrella-mooney/show-me-the-money"
                  title="GitHub"
                  target="_blank"
                >
                  <GithubIcon darkMode={darkMode} />
                </a>
              </div>
            </div>

            <div className="bg-indigo-100 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <Image
                alt="yes"
                src={sweetornot}
                width={400}
                height={215}
                decoding="async"
                className="mb-3 rounded-lg"
                loading="lazy"
              ></Image>
              <h1 className="text-lg font-semibold mb-5">Sweetml or Notml</h1>
              <p className="font-light mb-5">
                Let&apos;s settle the best HTML debate once and for all!
              </p>

              <div className="flex items-center">
                <a
                  href="https://github.com/estrella-mooney/sweetml-or-notml"
                  title="GitHub"
                  target="_blank"
                >
                  <GithubIcon darkMode={darkMode} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
