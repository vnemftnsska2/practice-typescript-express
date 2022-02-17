import { Request, Response } from 'express';
import { connect } from '../database';
import { Task } from './../interface/Task';

export const getTask = async (req: Request, res: Response): Promise<Response> => {
  const conn = await connect();
  const ret = await conn.query('SELECT * FROM task');
  return res.json(ret[0]);
}

export const addTask = async (req: Request, res: Response) => {
  const newTask:Task = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO task SET ?', [newTask]);
  return res.json({
    message: 'Add Task',
  });
};