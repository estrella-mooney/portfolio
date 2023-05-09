import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import wisdom from '../../public/wisdom.png'
import GithubIcon from './GithubIcon'
import { useState } from 'react'

export default function MainProjects() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <section className="py-6 mt-10">
          <div>
            <p className=" font-bold mb-3 text-violet-700 dark:text-amber-300">
              Dev Academy Projects
            </p>
          </div>
          <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-100 dark:hover:bg-gray-600 relative py-10">
            <div className="lg:mt-4 flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
              <div className="w-full lg:w-7/12 bg-cover relative my-auto">
                <div className="flex items-center justify-center w-full h-full relative">
                  <Image
                    alt="testHello"
                    width="600"
                    height="600"
                    src={buddy}
                    decoding="async"
                    className="mb-3 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-5/12 mt-10 lg:mt-0 lg:pl-5 relative z-10 md:pr-0 lg:pr-10">
                <div className="flex flex-col items-start justify-start">
                  <p className=" mb-3 mt-1 text-center lg:text-left">
                    Final Team Project
                  </p>
                  <p className="mb-2 text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                    Buddy
                  </p>

                  <p className="mb-3 tracking-wide">
                    As our final project for the Dev Academy Bootcamp, our team
                    of six developed a React app It was created to assist
                    newcomers in Wellington, New Zealand in connecting with
                    locals for guidance and cultural immersion. React,
                    React-Redux, Auth0, Node.js, Express, and SQLite3 were all
                    used to create the MVP for this project, utilising all we
                    had learned over the previous nine weeks. My classmate and I
                    continue to work on Buddy because we are passionate about
                    enhancing the experience of newcomers in New Zealand.
                  </p>

                  <div className="flex items-center">
                    <a
                      href="https://github.com/kahu-2023/buddy"
                      title="GitHub"
                      target="_blank"
                    >
                      <GithubIcon darkMode={darkMode} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-100 dark:hover:bg-gray-600 relative py-10">
            <div className=" flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
              <div className="w-full lg:w-7/12 bg-cover relative my-auto">
                <div className="flex items-center justify-center w-full h-full relative">
                  <Image
                    alt="testHello"
                    width="600"
                    height="600"
                    src={wanderLust}
                    decoding="async"
                    className="mb-3 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-5/12 mt-10 lg:mt-0 lg:pl-5 relative z-10 md:pr-0 lg:pr-10">
                <div className="flex flex-col items-start justify-start">
                  <p className="mb-3 mt-1 text-center lg:text-left">
                    Personal Project
                  </p>
                  <p className="mb-2 text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                    WanderLust
                  </p>

                  <p className="mb-3 tracking-wide">
                    {' '}
                    WanderLust is a web app for kiwis to keep a record of their
                    bucket list hikes. I was inspired to develop wanderLust to
                    solve my own struggles of having my favorite hiking
                    locations scattered across numerous documents. The mvp of
                    WanderLust was built using React, React-Redux, Express and
                    SQLite3. But one of the key features that I plan to add in
                    the future is Auth0, for users to access and view their own
                    saved hikes. This will also allow users to upload photos and
                    screenshots of their favorite locations, making it an
                    all-in-one solution for organizing their hiking goals and
                    experiences
                  </p>

                  <div className="flex items-center">
                    <a
                      href="https://github.com/estrella-mooney/wanderLust"
                      title="GitHub"
                      target="_blank"
                    >
                      <GithubIcon darkMode={darkMode} />
                    </a>
                    {/* <div className="pl-1">
                      <a
                        href="https://wanderlust-estrella.devacademy.nz/"
                        title="Buddy"
                        target="_blank"
                      >
                        <p className="inline-block">View Wunderlust</p>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-100 dark:hover:bg-gray-600 relative py-10">
            <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
              <div className="w-full lg:w-7/12 bg-cover relative my-auto">
                <div className="flex items-center justify-center w-full h-full relative">
                  <Image
                    alt="testHello"
                    width="600"
                    height="600"
                    src={wisdom}
                    decoding="async"
                    className="mb-3 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-5/12 mt-10 lg:mt-0 lg:pl-5 relative z-10 md:pr-0 lg:pr-10">
                <div className="flex flex-col items-start justify-start">
                  <p className="mb-3 mt-1 text-center lg:text-left">
                    First Team Project
                  </p>
                  <p className="mb-2 text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                    The Wisdom of Zoltash
                  </p>

                  <p className="mb-3 tracking-wide">
                    Discover what the future holds with Wisdom of Zoltash - your
                    ultimate fortune-telling app. Wisdom of Zoltash showcased my
                    group and I&apos;s first two weeks of bootcamp learning.
                    This project was the very first group project we worked on
                    at Dev Academy, where we had one week to learn how to use
                    Handlebar templates and Express.js. While we successfully
                    completed the project using Handlebars, we transitioned to
                    learning React the following week. Now, I would like to take
                    this project to the next level by upgrading it with React
                    and Next.js, to provide a better user experience with added
                    functionality.
                  </p>
                  <div className="flex items-center">
                    <a
                      href="https://github.com/estrella-mooney/wisdom-of-zoltash"
                      title="GitHub"
                      target="_blank"
                    >
                      <GithubIcon darkMode={darkMode} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
