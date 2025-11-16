import React, { use } from 'react';
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegisterButton = (event) => {
        event.preventDefault();
        console.log('Button is Clicked!');
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.imgUrl.value;
        const password = event.target.password.value;

        const newUser = {
            displayName,
            email,
            photoURL,
            password
        }
        console.log(newUser);
        createUser(email, password)
            .then((result) => {
                event.target.reset();
                console.log(result);
                fetch('http://localhost:5025/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
            <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">Register Now!</h2>

                <p className="text-center mb-6">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-primary">Login Now</NavLink>
                </p>
                {/* FORM START */}
                <form
                    onSubmit={handleRegisterButton}
                    className="space-y-4">
                    {/* Name */}
                    <div className="input-group">
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input
                            type="text"
                            name="name"
                            autoComplete='name'
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="input-group">
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            name="email"
                            autoComplete='email'
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="input-group">
                        <span>
                            <i className="fa-solid fa-image"></i>
                        </span>
                        <input
                            type="text"
                            name="imgUrl"
                            autoComplete='imageURL'
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="input-group">
                        <span>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        <input
                            type="password"
                            name="password"
                            autoComplete='password'
                            placeholder="Password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-linear-to-r from-purple-500 to-purple-600 border-none text-white">
                        Register
                    </button>
                </form>
                {/* FORM END */}

                <div className="divider">OR</div>

                <button className="btn w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-400 flex items-center justify-center gap-3 rounded-lg shadow-sm">
                    <FcGoogle className="text-2xl" />
                    <span className="font-medium">Sign Up With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;
