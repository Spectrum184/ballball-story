import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "moment/locale/vi";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./routers";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import nprogress from "nprogress";
import moment from "moment";

moment.locale("vi");

function generateRoute(route) {
    return (
        <Route key={route.path} path={route.path} element={route.component} />
    );
}

function App() {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        nprogress.start();
        nprogress.done();
    }, [location.pathname]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <main className="app">
            <ToastContainer />
            <Routes>{routes.map(generateRoute)}</Routes>
        </main>
    );
}

export default App;
