const User = require("../models/userModel");
const fs = require("fs");
const cloudinary = require("../helper/cloudinary");

const userCtrl = {
    updateAvatar: async (req, res) => {
        try {
            const { _id } = req.user;
            const filePath = req.file.path;
            const uploader = async (path) =>
                await cloudinary.uploads(path, "todo");

            const newPath = await uploader(filePath);

            // remove file at folder uploads
            fs.unlinkSync(filePath);
            console.log(newPath);

            const user = await User.findByIdAndUpdate(
                _id,
                {
                    avatar: newPath.url,
                },
                {
                    new: true,
                }
            );

            return res.status(200).json({
                message: "Done",
                user,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
};

module.exports = userCtrl;
