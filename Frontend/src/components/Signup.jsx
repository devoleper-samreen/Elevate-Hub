import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const Signup = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const heading = role === 'mentor' ? 'Sign Up as Mentor' : 'Sign Up as Student';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true)

        const formData = {
            ...data,
            role
        }


        try {

        } catch (error) {

        }

    }
    return (
        <div className="bg-green-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-20">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                    {heading}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            {...register("name", { "required": "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-left">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            {...register("username",
                                {
                                    required: "Username is required",
                                    minLength: {
                                        value: 4,
                                        message: "username must be of at least 4 character long"
                                    }
                                }
                            )}
                        />
                        {errors.username && (
                            <p className="text-red-600 text-left">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            {...register("email",
                                {
                                    "required": "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address"
                                    }

                                },

                            )}
                        />
                        {errors.email && (
                            <p className="text-red-600 text-left">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "password must be of at least 6 characters long"
                                }
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-600 text-left">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-700 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Signup"}

                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="text-green-600 font-medium hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
