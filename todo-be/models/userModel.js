const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default:
                "https://res.cloudinary.com/thanhtk/image/upload/v1667888214/fqhp3ifo52dbswrjmxta.jpg",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
