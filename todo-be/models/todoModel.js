const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
        },
        status: {
            type: Number,
            default: 0,
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("todo", todoSchema);
