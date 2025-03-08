import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import auth from "../apiManager/auth"
import toast from "react-hot-toast";

const Signin = () => {
    // const { role } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const heading = role === 'mentor' ? 'Sign Up as Mentor' : 'Sign Up as Student';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true)

        const formData = {
            ...data
        }

        try {
            const res = await auth.signin(formData)
            console.log(res);
            reset()
            toast.success(res?.data.message || "Login successfully!")
            navigate("/")

        } catch (error) {
            setIsLoading(false)
            console.log(error);

        }
    }

    return (
        <div className="bg-green-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md mt-20">
                <h2 className="text-4xl font-bold text-center mb-2">
                    Welcome Back
                </h2>
                <p className="text-sm mb-8 text-gray-400">Sign in to access your account</p>

                <form onSubmit={handleSubmit(onSubmit)}>

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
                        {isLoading ? "Loading..." : "Signin"}

                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6 text-sm mb-2">
                    Don't have an account yet? {" "}
                    <Link to='/signup/student'
                        className="text-green-700 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
                <p className="text-sm">Become a <Link to='/signup/mentor' className="text-green-700 font-bold">Mentor</Link> with us.</p>
            </div>
        </div>
    );
};

export default Signin;
