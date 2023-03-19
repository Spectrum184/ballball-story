require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routers = require("./router");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const APP_PORT = parseInt(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/health", function (req, res) {
    return res.json({
        statusCode: 200,
        message: "OK",
    });
});

// router
app.use(routers);

mongoose.set("strictQuery", false);
mongoose.connect(
    MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;

        console.log("🏳️‍🌈 Connected to mongo!");
    }
);

app.use(express.static("static"));

app.listen(APP_PORT, () => {
    console.log("🔥 Server listening on port:" + APP_PORT);
});
