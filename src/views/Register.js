import { React, useState } from "react";
import axios from "axios";

const url = "https://localhost:7274/api/user";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJhZmIxZmJlZi1lYWMwLTRkOTgtYTEzNi1mN2U4OWE0OThiMTQiLCJpYXQiOiIyNy4wNy4yMDIyIDEwOjE2OjQ0IiwiSWQiOiIxIiwiVXNlcm5hbWUiOiJoYXNhbiIsIkVtYWlsIjoiaGFzYW5AZ21haWwuY29tIiwiZXhwIjoxNjU4OTE3NjA0LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.1eayTirCLSeLcG1FBenUv-XgqYuC_3fU_HSfPPqY4r8";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const register = (e) => {
        e.preventDefault();
        axios
            .post(url, { username, email, password })
            .then((res) => {
                console.log("Posting data :", res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign up for new account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            sign in to your account
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                //required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                //required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email-address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                autoComplete="current-password"
                                //required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onSubmit={register}
                            className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
