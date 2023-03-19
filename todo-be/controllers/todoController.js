const Todo = require("../models/todoModel");

const todoCtrl = {
    addTodo: async (req, res) => {
        try {
            const { name, content, status } = req.body;
            const { _id } = req.user;

            if (!name || !content || !status) {
                return res.status(401).json({
                    message: "Fuck you",
                });
            }

            const todo = new Todo({
                name,
                content,
                status,
                userId: _id,
            });

            await todo.save();

            return res.status(200).json({
                message: "Done",
                todo,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    updateTodo: async (req, res) => {
        try {
            const { name, content, status } = req.body;
            const { id } = req.params;

            if (!name || !content || !status || !id) {
                return res.status(403).json({
                    message: "Chua nhap cai gi kia",
                });
            }

            const newTodo = await Todo.findByIdAndUpdate(
                id,
                {
                    name,
                    content,
                    status,
                },
                {
                    new: true,
                }
            );

            return res.status(200).json({
                message: "Done",
                todo: newTodo,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(403).json({
                    message: "Chua nhap cai gi kia",
                });
            }

            await Todo.findByIdAndDelete(id);

            return res.status(200).json({
                message: "Done",
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await Todo.findById(id);

            // //
            // Todo.find({
            //     userId: req.user._id
            // })

            return res.status(200).json({
                message: "Done",
                todo,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },

    getTodoByUserId: async (req, res) => {
        try {
            const todo = await Todo.find({
                userId: req.user._id,
            });

            return res.status(200).json({
                message: "Done",
                todo: todo || [],
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
};

module.exports = todoCtrl;
