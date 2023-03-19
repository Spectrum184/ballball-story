const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const role = async (req, res, next) => {
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

        console.log("Decoded", decoded);

        if (!decoded) {
            return res.status(403).json({
                message: "Get out",
            });
        }

        const user = await Users.findOne({
            _id: decoded.id,
        });

        console.log(user);

        if (user.role !== "ADMIN") {
            return res.status(401).json({
                message: "Get out",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Ok",
        });
    }
};

module.exports = role;
