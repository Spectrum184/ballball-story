require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routers = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const APP_PORT = parseInt(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/health", function (req, res) {
    return res.json({
        statusCode: 200,
        message: "OK",
    });
});

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

app.listen(APP_PORT, () => {
    console.log("🔥 Server listening on port:" + APP_PORT);
});
