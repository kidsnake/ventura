// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    res.status(200).json({ name: 'Ivan Horvat' })
  } else {
    const { counter, name } = req.body
    console.log(counter, 'fffff', name)

    res.send({ name: `${counter} name ${name}` });
  }
}
