const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            // validate data
            if (!username || !email || !password) {
                return res.status(401).json({
                    message: "Fuck you",
                });
            }

            // check user is exist in db
            const isExistUser = await User.findOne({
                username,
            });

            if (isExistUser) {
                return res.status(401).json({
                    message: "Fuck you noob",
                });
            }

            //hash password
            const passwordHash = await bcrypt.hash(password, 12);

            // create new user
            const newUser = new User({
                username,
                email,
                password: passwordHash,
            });

            // create access token and refresh token
            const accessToken = await jwt.sign(
                { id: newUser._id },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "1d",
                }
            );
            const refreshToken = await jwt.sign(
                { id: newUser._id },
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: "30d",
                }
            );

            // set refreshToken to cookies
            // res.cookie("refresh", refreshToken, {
            //     httpOnly: true,
            //     path: "/refresh",
            //     maxAge: 30 * 7 * 24 * 60 * 60 * 1000, //30 days
            // });

            await newUser.save();

            return res.status(200).json({
                accessToken,
                refreshToken,
                user: {
                    ...newUser._doc,
                    password: "",
                },
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            // validate data
            if (!username || !password) {
                return res.status(401).json({
                    message: "Fuck you",
                });
            }

            const user = await User.findOne({
                username,
            });

            if (!user) {
                return res.status(401).json({
                    message: "No user",
                });
            }

            const isMatchPassword = await bcrypt.compare(
                password,
                user.password
            );

            if (!isMatchPassword) {
                return res.status(401).json({
                    message: "No user",
                });
            }

            // create access token and refresh token
            const accessToken = await jwt.sign(
                { id: user._id },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "1d",
                }
            );
            const refreshToken = await jwt.sign(
                { id: user._id },
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: "30d",
                }
            );

            // set refreshToken to cookies
            // res.cookie("refresh", refreshToken, {
            //     httpOnly: true,
            //     path: "/refresh",
            //     maxAge: 30 * 7 * 24 * 60 * 60 * 1000, //30 days
            // });

            return res.status(200).json({
                accessToken,
                refreshToken,
                user: {
                    ...user._doc,
                    password: "",
                },
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("refresh", { path: "/refresh" });

            return res.status(200).json({
                message: "Done!",
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
    refresh: async (req, res) => {
        try {
            const refreshToken = req.cookies.refresh;

            if (!refreshToken) {
                return res.status(401).json({
                    message: message || "Ok",
                });
            }

            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                async (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: err.message || "Ok",
                        });
                    }

                    const user = await User.findById(result.id).select(
                        "-password"
                    );

                    if (!user) {
                        return res.status(401).json({
                            message: message || "Ok",
                        });
                    }

                    const accessToken = await jwt.sign(
                        { id: user._id },
                        process.env.ACCESS_TOKEN_SECRET,
                        {
                            expiresIn: "1d",
                        }
                    );

                    const refreshToken = await jwt.sign(
                        { id: user._id },
                        process.env.REFRESH_TOKEN_SECRET,
                        {
                            expiresIn: "30d",
                        }
                    );

                    return res.status(200).json({
                        accessToken,
                        refreshToken,
                        user,
                    });
                }
            );
        } catch (error) {
            return res.status(500).json({
                message: error.message || "Ok",
            });
        }
    },
};

module.exports = authCtrl;
