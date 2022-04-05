// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    res.status(200).json({ name: 'Ivan Horvat' })
  } else {
    const { counter, name } = req.body

    res.send({ name: `${counter} name ${name}` });
  }
}
