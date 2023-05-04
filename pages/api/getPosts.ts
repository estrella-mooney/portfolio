import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

export default async function getPostsAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API endpoint hit')

  try {
    const data = await prisma.post.findMany()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}
