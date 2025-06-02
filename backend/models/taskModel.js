const db = require("../db");

//The getTasks function takes data from the database, orders it by the date created, and then collect & returns the data.
const getTasks = async () => {
  const res = await db.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

//The addTask function takes a set of data with the parameters of the title and description, and then it is inserted into the database.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
