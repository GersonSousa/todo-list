const express = require('express');
const tasksController = require('../controllers/tasksController');
const tasksMiddleware = require('../middlewares/tasksMiddlewares');
const router = express.Router();

router.get('/api/tasks', tasksController.getAllTasks);
router.post(
  '/api/add_tasks',
  tasksMiddleware.validateBody,
  tasksController.addTask
);
router.delete('/api/removeTask/:id', tasksController.deleteTask);
router.put(
  '/api/updateTask/:id',
  tasksMiddleware.validateBody,
  tasksMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
