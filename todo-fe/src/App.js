import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routers";

function generateRoute(route) {
    return (
        <Route key={route.path} path={route.path} element={route.component} />
    );
}

function App() {
    return (
        <main className="app">
            <ToastContainer />
            <Routes>{routes.map(generateRoute)}</Routes>
        </main>
    );
}

export default App;
