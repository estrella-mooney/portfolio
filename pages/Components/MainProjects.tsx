import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import wisdom from '../../public/wisdom.png'

export default function MainProjects() {
  return (
    <>
      <section className="py-10">
        <div>
          <p className=" font-bold mb-3 text-violet-700 dark:text-amber-300">
            Projects
          </p>
        </div>

        <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-200 dark:hover:bg-gray-600 relative py-10">
          <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
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
                <p className="mb-5 mt-1 text-center lg:text-left">
                  First personal project
                </p>
                <p className="mb-5 text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                  WanderLust
                </p>

                <p className="mb-5">
                  {' '}
                  WanderLust is a web app for kiwis to keep a record of their
                  bucket list hikes. I was inspired to develop wanderLust to
                  solve my own struggles of having my favorite hiking locations
                  scattered across numerous documents. The mvp of WanderLust was
                  built using React, React-Redux, Express and SQLite3. But one
                  of the key features that I plan to add in the future is Auth0,
                  for users to access and view their own saved hikes. This will
                  also allow users to upload photos and screenshots of their
                  favorite locations, making it an all-in-one solution for
                  organizing their hiking goals and experiences
                </p>

                <div className="flex items-center">
                  <a href="https://github.com/kahu-2023/buddy" title="GitHub">
                    <svg
                      aria-hidden="true"
                      className="octicon octicon-mark-github pr-1"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="24"
                    >
                      <path
                        fillRule="evenodd"
                        fill="white"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                  <div className="pl-1">
                    <a
                      href="https://wanderlust-estrella.devacademy.nz/"
                      title="Buddy"
                    >
                      <p className="inline-block">View Wunderlust</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-200 dark:hover:bg-gray-600 relative py-10">
          <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
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
                <p className=" mb-5 mt-1 text-center lg:text-left">
                  Week Nine of Dev Academy, Final group project
                </p>
                <p className="text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                  Buddy
                </p>

                <p className="mb-5">
                  Our final project at the Dev Academy Bootcamp in 2023 was
                  developed by our team of 6 and the React app designed to help
                  newcomers in Wellington, NZ connect with locals for cultural
                  immersion and guidance. The MVP for this app was developed
                  with React, React-Redux, Auth0, Node.js, Express, SQLite3,
                  utilizing everything we had learned over those last nine
                  weeks. Passionate about improving the experience of newcomers
                  in New Zealand, my classmate and I continue to work on Buddy,
                  we&apos;re dedicated to refining the app, fixing bugs, and
                  adding new features to make it a more useful tool for people
                  in the real world.
                </p>

                <div className="flex items-center">
                  <a href="https://github.com/kahu-2023/buddy" title="GitHub">
                    <svg
                      aria-hidden="true"
                      className="octicon octicon-mark-github pr-1"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="24"
                    >
                      <path
                        fillRule="evenodd"
                        fill="white"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                  <div className="pl-1">
                    <a href="https://buddy.devacademy.nz/" title="Buddy">
                      <p className="inline-block">View Buddy</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-200 dark:hover:bg-gray-600 relative py-10">
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
                <p className="mb-5 mt-1 text-center lg:text-left">
                  Week Two of Dev Academy, First group project
                </p>
                <p className="text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                  The Wisdom of Zoltash
                </p>

                <p className="mb-5">
                  Discover what the future holds with Wisdom of Zoltash - your
                  ultimate fortune-telling app. Wisdom of Zoltash showcased my
                  group and I&apos;s first two weeks of bootcamp learning. This
                  project was the very first group project we worked on at Dev
                  Academy, where we had one week to learn how to use Handlebar
                  templates and Express.js. While we successfully completed the
                  project using Handlebars, we transitioned to learning React
                  the following week. Now, I would like to take this project to
                  the next level by upgrading it with React and Next.js, to
                  provide a better user experience with added functionality.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://github.com/estrella-mooney/wisdom-of-zoltash"
                    title="GitHub"
                  >
                    <svg
                      aria-hidden="true"
                      className="octicon octicon-mark-github pr-1"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="24"
                    >
                      <path
                        fillRule="evenodd"
                        fill="white"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
