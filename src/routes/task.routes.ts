import { Router } from 'express';
const router = Router();

import { getTask, addTask, getTaskById, deleteTaskById, updateTaskById } from '../controllers/task.controller';

router.route('/')
  .get(getTask)
  .post(addTask);

router.route('/:taskId')
  .get(getTaskById)
  .delete(deleteTaskById)
  .put(updateTaskById)

export default router;