import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])