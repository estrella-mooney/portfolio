import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      //get Prisma to fetch the post
      const data = await prisma.post.findMany
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500)
    }
  }
}
