const express = require("express");
const authRouter = require("./authRouter");

const router = express.Router();

const defaultRouter = [
    {
        path: "",
        router: authRouter,
    },
];

defaultRouter.forEach((route) => {
    router.use(route.path, route.router);
});

module.exports = router;
