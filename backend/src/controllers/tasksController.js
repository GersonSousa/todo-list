const tasksModel = require('../models/tasksModel');

const getAllTasks = async (req, res) => {
  const tasks = await tasksModel.getAllTasks();

  return res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const createdTask = await tasksModel.addTask(req.body);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);

  return res.status(200).json({ message: 'deletado' });
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);

  return res.status(200).json({ message: 'atualizado' });
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
};
