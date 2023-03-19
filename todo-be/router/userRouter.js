const express = require("express");
const authMiddleware = require("../middleware/auth");
const multerUpload = require("../helper/multer");
const userCtrl = require("../controllers/userController");
const role = require("../middleware/roles");

const userRouter = express.Router();

userRouter.post(
    "",
    [authMiddleware, multerUpload.single("avatar")],
    userCtrl.updateAvatar
);

userRouter.delete("", role, userCtrl.updateAvatar);

module.exports = userRouter;
