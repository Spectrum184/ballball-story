import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/userSlice";

const AuthForm = ({ isLoginPage = true }) => {
    const userProfile = {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    };
    const userProfileError = {
        usernameError: "",
        passwordError: "",
    };
    const [profileData, setProfileData] = useState(userProfile);
    const [profileDataError, setProfileDataError] = useState(userProfileError);
    const [rememberMe, setRememberMe] = useState(true);
    const { username, password, confirmPassword, email } = profileData;
    const { usernameError, passwordError } = profileDataError;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target;

        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (username.length < 6 || username.length > 30) {
            setProfileDataError({
                ...profileDataError,
                usernameError: "Tên đăng nhập ngắn ngắn thôi",
            });
            return;
        }

        if (password.length < 6 || password.length > 30) {
            setProfileDataError({
                ...profileDataError,
                passwordError: "Mật khẩu bạn eiiii!",
            });
            return;
        }

        if (password !== confirmPassword && !isLoginPage) {
            setProfileDataError({
                ...profileDataError,
                passwordError: "Bị ngáo à!",
            });
            return;
        }

        setProfileDataError(userProfileError);
        if (isLoginPage) {
            dispatch(
                login({
                    username,
                    password,
                    rememberMe,
                })
            );
        } else {
            dispatch(
                register({
                    username,
                    email,
                    rememberMe,
                    password,
                })
            );
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={onSubmit} className="auth-form">
                <h2>{isLoginPage ? "Đăng nhập" : "Đăng ký"}</h2>
                <div className="input-wrapper">
                    <span>Tên đăng nhập:</span>
                    <input
                        className="todo-input"
                        value={username}
                        onChange={handleChange}
                        name="username"
                    />
                    <p className="error-text">{usernameError}</p>
                </div>
                <div className="input-wrapper">
                    <span>Mật khẩu:</span>
                    <input
                        className="todo-input"
                        value={password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        autoComplete="on"
                    />
                    <p className="error-text">{passwordError}</p>
                </div>
                {!isLoginPage && (
                    <>
                        <div className="input-wrapper">
                            <span>Xác nhận:</span>
                            <input
                                className="todo-input"
                                value={confirmPassword}
                                onChange={handleChange}
                                name="confirmPassword"
                                type="password"
                                autoComplete="on"
                            />
                        </div>
                        <div className="input-wrapper">
                            <span>Email:</span>
                            <input
                                className="todo-input"
                                value={email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                            />
                        </div>
                    </>
                )}
                <div className="btn-wrapper">
                    <div className="remember-me">
                        <p>Nhớ tao không?</p>
                        <input
                            value={rememberMe}
                            type="checkbox"
                            defaultChecked
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                    </div>
                    <button type="submit" className="todo-btn primary">
                        {isLoginPage ? "Đăng nhập" : "Đăng ký"}
                    </button>
                </div>
                <p>
                    {isLoginPage ? (
                        <span>
                            Bạn chưa có tài khoản?
                            <Link to="/register">đăng ký</Link>
                        </span>
                    ) : (
                        <span>
                            Bạn đã có tài khoản?
                            <Link to="/login">đăng nhập</Link>
                        </span>
                    )}
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
