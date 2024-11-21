import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Settings from '../views/Settings';
import DashBoard from "../views/Dashboard";
import PainelEstatistico from "../views/PainelEstatistico";
import NotFound from '../views/NotFound';
import SignIn from "../views/SingIn";
import SignUp from "../views/SignUp";
import Form from "../views/Form";
import PrivateRoute  from "./private";
import { AuthProvider } from '../context/Auth';


const router = createBrowserRouter([
    {
        path: "/tp2/",
        element: <Home />,
    },
    {
        path: "/tp2/signin",
        element: <PrivateRoute element={<SignIn />} />,
    },
    {
        path: "/tp2/signup",
        element: <PrivateRoute element={<SignUp />} />,
    },
    {
        path: "/tp2/settings",
        element: <Settings />,
    },
    {
        path: "/tp2/dashboard",
        element: <DashBoard />,
    },
    {
        path: "/tp2/painel-estatico",
        element: <PainelEstatistico />,
    },
    {
        path: "/tp2/form",
        element: <Form />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const routes = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}

export default routes;