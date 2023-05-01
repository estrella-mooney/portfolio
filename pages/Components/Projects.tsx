import Image from 'next/image'
import wanderLust from '../public/wanderlust.png'
import buddy from '../public/buddy.png'

function Projects() {
  return (
    <>
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
              An app helping newcomers in Wellington, NZ connect with locals for
              cultural immersion and guidance. (Final Group project at Dev
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
    </>
  )
}

export default Projects