import { NextApiRequest, NextApiResponse } from 'next';

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  middleware: CallableFunction
) => {
  return new Promise((resolve, reject) => {
    middleware(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};
