const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const accessToken = req.header("Authorization");
        console.log("accessToken", accessToken);

        if (!accessToken) {
            return res.status(403).json({
                message: "Get out",
            });
        }

        const decoded = await jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        );

        if (!decoded) {
            return res.status(403).json({
                message: "Get out",
            });
        }

        const user = await Users.findById(decoded.id);

        req.user = user;

        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Ok",
        });
    }
};

module.exports = auth;
