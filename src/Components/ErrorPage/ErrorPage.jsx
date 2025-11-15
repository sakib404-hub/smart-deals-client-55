// ErrorPage.jsx
import React from "react";
import { Link } from "react-router";
import errorImg from '../../assets/2022_ani_cartoon_214.jpg'

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
            <p className="text-center text-gray-600 mb-6">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
                Go Back Home
            </Link>
            <img
                src={errorImg}
                alt="Error Illustration"
                className="mt-8 w-96 max-w-full"
            />
        </div>
    );
};

export default ErrorPage;
