const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mock = [
    {
        username: "thanh",
        password: "thanhdepzai",
    },
    {
        username: "thanh1",
        password: "thanhdepzai3",
    },
    {
        username: "thanh3",
        password: "thanhdepzai3",
    },
    {
        username: "thanh3",
        password: "thanhdepzai3",
    },
    {
        username: "thanh2",
        password: "thanhdepzai45",
    },
];

app.get("/find-user/:username", function (req, res) {
    const { username } = req.params;

    const user = mock.find((user) => user.username === username);

    if (user) {
        delete user.password;

        return res.json({
            statusCode: 200,
            user,
            message: "Found!",
        });
    }

    return res.json({
        statusCode: 404,
        message: "Not Found!",
    });
});

app.post("/login", function (req, res) {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({
            statusCode: 403,
            message: "Chua nhap mat khau voi username kia!",
        });
    }

    // find user in db
    let isExistUser = false;
    for (let i = 0; i < mock.length; i++) {
        const user = mock[i];

        if (user.username === username && user.password === password) {
            isExistUser = true;

            break;
        }
    }

    if (isExistUser) {
        return res.json({
            statusCode: 200,
            message: "Welcome to my team",
        });
    }

    return res.json({
        statusCode: 401,
        message: "Can't login",
    });
});

app.put("/", function (req, res) {
    console.log(req.body);

    return res.json({
        ok: "baby",
    });
});

app.patch("/", function (req, res) {
    console.log(req.body);

    return res.json({
        ok: "baby",
    });
});

app.delete("/", function (req, res) {
    console.log(req.body);

    return res.json({
        ok: "baby",
    });
});

app.listen(3000);
