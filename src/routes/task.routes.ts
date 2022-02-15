import { Router } from 'express';
const router = Router();

import { getTask, addTask } from '../controllers/task.controller';

router.route('/')
  .get(getTask)
  .post(addTask);

export default router;