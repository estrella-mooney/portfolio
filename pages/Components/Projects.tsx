import { FC } from 'react'
import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import wisdom from '../../public/wisdom.png'
import Link from 'next/link'

interface ProjectProps {
  title: string
  content: string
  tech_used: string
  reflection: string
}

interface ProjectsProps {
  data: ProjectProps[]
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <>
      <section className="py-10">
        <div>
          <p className=" font-bold mb-3 text-violet-700 dark:text-amber-300">
            Projects
          </p>
          <Link href="/IndiProject">Indi Project</Link>
        </div>

        {/* Beginnng of testing */}
        {/* <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <Image
              src={wanderLust}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Lyft launching cross-platform service this week
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div> */}
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
    </>
  )
}

export default Projects

// import { FC } from 'react'
// import Image from 'next/image'
// import wanderLust from '../../public/wanderlust.png'
// import buddy from '../../public/buddy.png'
// import wisdom from '../../public/wisdom.png'

// interface ProjectProps {
//   title: string
//   content: string
//   tech_used: string
//   reflection: string
// }

// interface ProjectsProps {
//   data: ProjectProps[]
// }

// const getProjectLink = (title: string) => {
//   switch (title) {
//     case 'Wunderlust':
//       return 'https://github.com/estrella-mooney/wanderLust' //----> CHANGE
//     case 'Buddy':
//       return 'https://github.com/kahu-2023/buddy"'
//     case 'Wisdom Of Zoltash':
//       return 'https://github.com/estrella-mooney/wisdom-of-zoltash'
//     default:
//       return '#'
//   }
// }

// const getProjectImage = (title: string) => {
//   switch (title) {
//     case 'Wunderlust':
//       return wanderLust
//     case 'Buddy':
//       return buddy
//     case 'Wisdom Of Zoltash':
//       return wisdom
//     default:
//       return wanderLust
//   }
// }

// const Projects: FC<ProjectsProps> = ({ data = [] }) => {
//   return (
//     <section className="py-10">
//       <div>
//         <p className="font-bold mb-3 text-violet-700 dark:text-amber-300">
//           Projects
//         </p>
//       </div>
//       <div className="flex flex-wrap">
//         {data.map((project) => (
//           <div
//             key={project.title}
//             className="bg-indigo-200 dark:hover:bg-gray-600 flex-1 p-7 m-3 rounded-lg max-w-xl hover:shadow-lg transition ease-in-out duration-200 hover:text-contrast-white text-gray-800 dark:bg-gray-700 dark:text-gray-300"
//           >
//             <Image
//               alt="yes"
//               src={getProjectImage(project.title)}
//               width={400}
//               height={215}
//               decoding="async"
//               className="mb-3 rounded-lg"
//               loading="lazy"
//             />
//             <h1 className="text-lg font-semibold mb-5">{project.title}</h1>
//             <p className="font-light mb-5">{project.content}</p>
//             <p className="mb-5">
//               <b>Tech Used:</b>
//             </p>
//             <p className="mb-5">{project.tech_used}</p>
//             <p>
//               <b>Reflections:</b>
//             </p>
//             <p className="mb-5">{project.reflection}</p>
//             <div className="flex items-center">
//               <a href={getProjectLink(project.title)} title="GitHub">
//                 <svg
//                   aria-hidden="true"
//                   className="octicon octicon-mark-github pr-1"
//                   height="24"
//                   version="1.1"
//                   viewBox="0 0 16 16"
//                   width="24"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
//                   ></path>
//                 </svg>
//               </a>
//               <div className="pl-1">
//                 <a
//                   href="https://wanderlust-estrella.devacademy.nz/"
//                   title="Buddy"
//                 >
//                   <p className="inline-block">View {project.title}</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects
