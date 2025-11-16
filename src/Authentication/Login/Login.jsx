import React, { use } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Login = () => {
    const { singInUser } = use(AuthContext);
    const handleloginFormSubmission = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        singInUser(email, password)
            .then((result) => {
                console.log(result.user)
                event.target.reset();
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-3xl font-semibold text-center mb-2">Login</h2>
                <p className="text-center text-gray-600 mb-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-purple-600 font-medium hover:underline">
                        Register Now
                    </Link>
                </p>

                <form
                    onSubmit={handleloginFormSubmission}
                    className="space-y-4">
                    <div className="form-control">
                        <label
                            htmlFor="email"
                            className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <div className="relative">
                            <AiOutlineMail className="absolute left-3 top-3 text-gray-400 text-xl" />
                            <input
                                type="email"
                                name="email"
                                autoComplete="current-name"
                                id="email"
                                placeholder="smsowkothasan@gmail.com"
                                className="input input-bordered w-full pl-10"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label
                            htmlFor="password"
                            className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <div className="relative">
                            <AiOutlineLock className="absolute left-3 top-3 text-gray-400 text-xl" />
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                id="password"
                                placeholder="***********"
                                className="input input-bordered w-full pl-10"
                            />
                        </div>
                    </div>

                    <div className="text-right text-sm">
                        <button type="button" className="text-gray-500 hover:text-purple-600">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="btn w-full bg-linear-to-r from-purple-500 to-purple-600 text-white border-none hover:opacity-90"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button className="btn w-full border-gray-300 bg-white hover:bg-gray-50 flex items-center gap-2">
                    <FcGoogle size={20} /> Sign In With Google
                </button>
            </div>
        </div>
    );
}
export default Login;