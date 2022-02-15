import { Request, Response } from 'express';
import { connect } from '../database';

export const getTask = async (req: Request, res: Response): Promise<Response> => {
  const conn = await connect();
  const ret = await conn.query('SELECT * FROM task');
  return res.json(ret[0]);
}

export const addTask = async (req: Request, res: Response) => {
  const newPost = req.body;
  return res.json({
    message: 'Add Task',
  });
};