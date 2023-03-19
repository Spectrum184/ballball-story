const express = require("express");
const todoCtrl = require("../controllers/todoController");
const authMiddleware = require("../middleware/auth");

const todoRouter = express.Router();

todoRouter.post("", authMiddleware, todoCtrl.addTodo);
todoRouter.put("/:id", authMiddleware, todoCtrl.updateTodo);
todoRouter.delete("/:id", authMiddleware, todoCtrl.deleteTodo);
todoRouter.get("/:id", authMiddleware, todoCtrl.getById);
todoRouter.get("", authMiddleware, todoCtrl.getTodoByUserId);

module.exports = todoRouter;
