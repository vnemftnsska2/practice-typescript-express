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
    message: 'Create Task',
  });
};

export const getTaskById = async(req: Request, res: Response):Promise<Response> => {
  const id = req.params.taskId;
  const conn = await connect();
  const task = await conn.query('SELECT * FROM task WHERE idx = ?', [id]);
  return res.json(task[0]);
}

export const deleteTaskById = async(req:Request, res:Response):Promise<Response> => {
  const id = req.params.taskId;
  const conn = await connect();
  await conn.query('DELETE FROM task WHERE idx = ?', [id]);
  return res.json({
    message: 'Delete Task',
  });
}

export const updateTaskById = async(req:Request, res:Response): Promise<Response> => {
  const id = req.params.taskId;
  const taskParam:Task = req.body;

  const conn = await connect();
  await conn.query('UPDATE task set ? WHERE idx = ?', [taskParam, id]);
  return res.json({
    message: 'Update Task',
  });
}