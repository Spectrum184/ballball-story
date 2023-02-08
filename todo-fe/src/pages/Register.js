import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Auth";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            <AuthForm isLoginPage={false} />
        </div>
    );
};

export default Register;
