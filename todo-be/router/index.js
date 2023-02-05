const express = require("express");
const authRouter = require("./authRouter");
const todoRouter = require("./todoRouter");
const userRouter = require("./userRouter");

const router = express.Router();

const defaultRouter = [
    {
        path: "",
        router: authRouter,
    },
    {
        path: "/todo",
        router: todoRouter,
    },
    {
        path: "/user",
        router: userRouter,
    },
];

defaultRouter.forEach((route) => {
    router.use(route.path, route.router);
});

module.exports = router;
