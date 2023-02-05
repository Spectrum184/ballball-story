const express = require("express");
const authMiddleware = require("../middleware/auth");
const multerUpload = require("../helper/multer");
const userCtrl = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post(
    "",
    [authMiddleware, multerUpload.single("avatar")],
    userCtrl.updateAvatar
);

module.exports = userRouter;
