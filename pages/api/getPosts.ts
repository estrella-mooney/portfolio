// import type { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '../../prisma/client'

// export default async function getPostsAPI(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log('API endpoint hit')

//   try {
//     const data = await prisma.post.findMany()
//     return res.status(200).json(data)
//   } catch (error: any) {
//     console.error('Error fetching posts:', error.message)
//     return res.status(500).json({ message: 'Internal server error' })
//   }
// }

import type { VercelRequest, VercelResponse } from '@vercel/node'
import prisma from '../../prisma/client'

export default async function getPostsAPI(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log('API endpoint hit')

  try {
    const data = await prisma.post.findMany()
    return res.status(200).json(data)
  } catch (error: any) {
    console.error('Error fetching posts:', error.message)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
