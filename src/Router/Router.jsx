import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProducts from "../Components/MyProducts/MyProducts";
import AllProducts from "../Components/AllProducts/AllProducts";
import MyBids from "../Components/MyBids/MyBids";
import CreateProducts from "../Components/Createproducts/CreateProducts";
import Loader from "../Components/Loader/Loader";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:5025/latest-products'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/allproducts',
                loader: () => fetch('http://localhost:5025/products'),
                Component: AllProducts,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5025/products/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/myProducts',
                element: <PrivateRoute>
                    <MyProducts></MyProducts>
                </PrivateRoute>
            }, {
                path: '/mybids',
                element: <PrivateRoute>
                    <MyBids></MyBids>
                </PrivateRoute>
            },
            {
                path: '/createProducts',
                element: <PrivateRoute>
                    <CreateProducts></CreateProducts>
                </PrivateRoute>
            }
        ]
    }
])