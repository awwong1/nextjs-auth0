import type { IncomingMessage } from 'http';
import { NextApiRequest } from '@awwong1/next';
import { NextRequest } from '@awwong1/next/server';

type Req = IncomingMessage | NextApiRequest | NextRequest | Request | Record<string, any>;

export const isRequest = (req: Req): boolean => {
  return req instanceof Request || req.headers instanceof Headers || typeof (req as Request).bodyUsed === 'boolean';
};

export const isNextApiRequest = (req: Req) => {
  return !isRequest(req) && 'query' in req;
};
