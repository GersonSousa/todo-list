const connection = require('./connection');

const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT * FROM Tasks');

  return tasks;
};

const addTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';

  const createdTask = await connection.execute(query, [
    title,
    'PENDENTE',
    dateUTC,
  ]);

  return createdTask;
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';

  const removedTask = await connection.execute(query, [id]);

  return removedTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title = ? , status = ? WHERE id = ?';

  const updatedTask = await connection.execute(query, [title, status, id]);

  return updatedTask;
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
};
