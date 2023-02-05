const express = require("express");
const authCtrl = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", authCtrl.register);
authRouter.post("/login", authCtrl.login);

module.exports = authRouter;
