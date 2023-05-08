import { FC } from 'react'
import Image from 'next/image'
import wanderLust from '../../public/wanderlust.png'
import buddy from '../../public/buddy.png'
import wisdom from '../../public/wisdom.png'

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

// const IndiProject: FC<ProjectsProps> = ({ data = [] }) => {
//   return (
//     <section className="py-10">
//       <div>
//         <p className="font-bold mb-3 text-violet-700 dark:text-amber-300">
//           Projects
//         </p>
//       </div>
//       {data.map((project) => (
//         <div key={project.title}>
//           <Image
//             alt="yes"
//             src={getProjectImage(project.title)}
//             width={400}
//             height={215}
//             decoding="async"
//             loading="lazy"
//           />
//           <p className="font-light mb-5">{project.content}</p>
//           <p className="mb-5">
//             <b>Tech Used:</b>
//           </p>
//           <p className="mb-5">{project.tech_used}</p>
//           <p>
//             <b>Reflections:</b>
//           </p>
//           <p className="mb-5">{project.reflection}</p>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default IndiProject

export function IndiProject() {
  return
}
