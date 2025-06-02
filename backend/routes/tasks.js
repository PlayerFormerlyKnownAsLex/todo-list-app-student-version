const express = require("express");
const router = express.Router();
// The constant "taskModel" has a requirement to be within the "models" folder.
const taskModel = require("../models/taskModel");

//The following four lines work by getting data and running the ".getTasks()" function from "taskModel".
//Then, the data is retrieved back to tasks.js.
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Write a comment describing the purpose of this route
router.post("/", async (req, res) => {
  //there is a bug in the line below you need to fix
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
