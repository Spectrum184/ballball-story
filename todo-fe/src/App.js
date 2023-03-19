import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "moment/locale/vi";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./routers";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import NProgress from "nprogress";
import moment from "moment";

moment.locale("vi");

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

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
        NProgress.start();
        NProgress.done();
    }, [location.pathname]);

    useEffect(() => {
        if (!isAuthenticated) {
            if (location.pathname !== "/login" || location.pathname !== "/register") {
                navigate("/login");
            }
        }
    }, [isAuthenticated, navigate, location.pathname]);

    return (
        <main className="app">
            <ToastContainer />
            <Routes>{routes.map((r) => generateRoute(r))}</Routes>
        </main>
    );
}

export default App;
