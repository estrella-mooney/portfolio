import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import wisdom from '../../public/wisdom.png'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <section className="py-10">
        <div>
          <p className=" font-bold mb-3 text-violet-700 dark:text-amber-300">
            Projects
          </p>
        </div>

        {/* Beginnng of testing */}

        {/* Testing for a new layout */}

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-5 mb-36 ">
          <div className="bg-indigo-200 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            <Image
              alt="yes"
              src={wanderLust}
              width={400}
              height={215}
              decoding="async"
              className="mb-3 rounded-lg"
              loading="lazy"
            ></Image>
            <h1 className="text-lg font-semibold mb-5">Wunderlust</h1>
            <p className="font-light mb-5">
              A web app for kiwis to keep a record of their bucket list hikes
            </p>
            <p className="mb-5">
              <b>Tech Used:</b>
            </p>
            <p className="mb-5">React, React-Redux, Express, SQLite3, SASS </p>
            <p>
              <b>Reflections:</b>
            </p>
            <p className="mb-5">
              While the MVP for the app was successfully completed, there is
              still room for improvement. One of the key features I want to add
              is a login system that allows users to access and view their own
              saved hikes. This will also allow users to upload photos and
              screenshots of their favorite locations, making it an all-in-one
              solution for organizing their hiking goals and experiences. I was
              inspired to develop this feature as I often found myself juggling
              multiple tabs and folders with photos and screenshots of various
              hiking locations. With this soon-to-be login system, users can
              easily keep track of their favorite hikes and destinations,
              without having to search through multiple sources.
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

          <div className="bg-indigo-200 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
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
              An app helping newcomers in Wellington, NZ connect with locals for
              cultural immersion and guidance.
            </p>{' '}
            {/* <p className="font-light mb-5">
              An app helping newcomers in Wellington, NZ connect with locals for
              cultural immersion and guidance. (Final Group project at Dev
              Academy).
            </p> */}
            <p className="mb-5">
              <b>Tech Used:</b>
            </p>
            <p className="mb-5">
              React, React-Redux, Auth0, Material UI, Node.js, Express, SQLite3{' '}
            </p>
            <p>
              <b>Reflections:</b>
            </p>
            <p className="mb-5">
              The MVP for this app was originally developed as the final project
              for my group at the Dev Academy Bootcamp in 2023. My classmate and
              I, who both share a passion for improving the experience of
              newcomers in Wellington, have since continued to work on it.
              Together, we have been fixing bugs, adding new features, and
              refining the app to make it a more usable tool for people in the
              real world. One of our goals is to build an inbuilt messaging
              system that will make it easier for users to connect.
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

          <div className="bg-indigo-200 dark:hover:bg-gray-600 flex-1 p-7 my-6 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            <Image
              alt="yes"
              src={wisdom}
              width={400}
              height={215}
              decoding="async"
              className="mb-3 rounded-lg"
              loading="lazy"
            ></Image>
            <h1 className="text-lg font-semibold mb-5">Wisdom Of Zoltash</h1>
            <p className="font-light mb-5">
              Discover what the future holds with Wisdom of Zoltash - your
              ultimate fortune-telling app.
            </p>
            <p className="mb-5">
              <b>Tech Used:</b>
            </p>
            <p className="mb-5">Handlebars, CSS </p>
            <p>
              <b>Reflections:</b>
            </p>
            <p className="mb-5">
              This project was the very first group project I worked on at Dev
              Academy, where we had just one week to learn how to use
              Handlebars. While we successfully completed the project using
              Handlebars, we transitioned to learning React in the following
              week. Now, I would like to take this project to the next level by
              upgrading it with React and Next.js, to provide a better user
              experience with added functionality.
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
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" mb-10 rounded-lg hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-indigo-200 dark:hover:bg-gray-600 relative py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-5 xl:px-0">
          <div className="w-full lg:w-7/12 bg-cover relative mt-20">
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
              <p className="text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                WanderLust
              </p>
              <p className="mt-1 text-center lg:text-left">
                - First personal project
              </p>
              <p className="mb-2">
                {' '}
                A web app for kiwis to keep a record of their bucket list hikes
              </p>
              <p className="mb-2">
                <b>Tech Used:</b>
              </p>
              <p className="mb-2">
                React, React-Redux, Express, SQLite3, SASS{' '}
              </p>
              <p>
                <b>Reflections:</b>
              </p>
              <p className="mb-5">
                While the MVP for the app was successfully completed, there is
                still room for improvement. One of the key features I want to
                add is a login system that allows users to access and view their
                own saved hikes. This will also allow users to upload photos and
                screenshots of their favorite locations, making it an all-in-one
                solution for organizing their hiking goals and experiences. I
                was inspired to develop this feature as I often found myself
                juggling multiple tabs and folders with photos and screenshots
                of various hiking locations. With this soon-to-be login system,
                users can easily keep track of their favorite hikes and
                destinations, without having to search through multiple sources.
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
          <div className="w-full lg:w-7/12 bg-cover relative mt-20">
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
              <p className="text-4xl font-medium text-center lg:text-left leading-snug font-serif">
                Buddy
              </p>
              <p className="mt-1 text-center lg:text-left">
                - Final group project
              </p>
              <p className="mb-2">
                {' '}
                An app helping newcomers in Wellington, NZ connect with locals
                for cultural immersion and guidance.{' '}
              </p>
              <p className="mb-5">
                <b>Tech Used:</b>
              </p>
              <p className="mb-5">
                React, React-Redux, Auth0, Material UI, Node.js, Express,
                SQLite3{' '}
              </p>
              <p>
                <b>Reflections:</b>
              </p>
              <p className="mb-5">
                The MVP for this app was originally developed as the final
                project for my group at the Dev Academy Bootcamp in 2023. My
                classmate and I, who both share a passion for improving the
                experience of newcomers in Wellington, have since continued to
                work on it. Together, we have been fixing bugs, adding new
                features, and refining the app to make it a more usable tool for
                people in the real world. One of our goals is to build an
                inbuilt messaging system that will make it easier for users to
                connect.
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
    </>
  )
}
