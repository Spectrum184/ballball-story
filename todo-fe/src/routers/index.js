import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";
import Profile from "../pages/Profile";

export const routes = [
    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "/register",
        component: <Register />,
    },
    {
        path: "/",
        component: <Todo />,
        name: "todo",
    },
    {
        path: "/profile",
        component: <Profile />,
        name: "profile",
    },
];
