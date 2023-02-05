const express = require("express");
const authCtrl = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", authCtrl.register);
authRouter.post("/login", authCtrl.login);
authRouter.post("/logout", authCtrl.logout);
authRouter.post("/refresh", authCtrl.refresh);

module.exports = authRouter;
