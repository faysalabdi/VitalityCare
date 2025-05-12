import { Request, Response } from 'express';
import app from '../server/index';

export default async function handler(req: Request, res: Response) {
  await app(req, res);
} 