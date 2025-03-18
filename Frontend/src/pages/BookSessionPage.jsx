import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import mentorApi from '../apiManager/mentor';
import { getServiceByMentorUsername } from "../apiManager/service"
import { handlePayments } from "../helper/payment"
import useUserStore from "../store/user"

function BookSessionPage() {
    const { user } = useUserStore()
    console.log("user state: ", user);

    const { username } = useParams()
    const [mentor, setMentor] = useState()
    const [services, setServices] = useState()

    const fetchMentorByUsername = async () => {
        try {
            const response = await mentorApi.getMentorsByUsername(username)
            console.log(response);

            setMentor(response?.data.mentor)

        } catch (error) {
            console.log(error);
        }
    }

    const fetchMentorSession = async () => {
        try {
            const response = await getServiceByMentorUsername(username)
            console.log("services fetching: ", response);
            setServices(response?.data?.services)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchMentorByUsername()
        console.log("mentor name", mentor?.name);
        fetchMentorSession()

    }, [])

    const handlePayment = async (price) => {
        console.log('hello...');
        const amount = price || 100
        const name = user.name || "samreen"
        const email = user.email || "example123@gmail.com"
        await handlePayments({ amount, name, email })

    }

    return (
        <div className='flex'>
            {/* mentor profile sidebar */}
            <aside className="flex flex-col w-2/6 h-screen px-4 py-8 overflow-y-auto bg-gradient-to-r from-indigo-50 to-white border-r shadow-lg">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img
                        className="object-cover w-44 h-44 mx-2 rounded-full shadow-lg"
                        src={mentor?.profile?.profilePicture || `https://ui-avatars.com/api?name=${mentor?.name}`}
                        alt={`${mentor?.name}'s avatar`}
                    />
                    <h4 className="mx-2 mt-2 font-medium text-2xl text-gray-800">{mentor?.name || "Aryan Khan"}</h4>
                    <p className="mx-2 text-sm font-medium text-gray-600 my-6">
                        {mentor?.profile?.bio}
                    </p>
                    <div className="mx-2 text-sm font-medium text-gray-600 flex mb-6">
                        {
                            mentor?.profile.tags.map((tag, i) => (
                                <p key={i} className='text-yellow-600 border px-4 py-2 border-orange-300 rounded'>{tag}</p>
                            ))
                        }

                    </div>

                    <h3 className="text-xl font-semibold text-center text-black">
                        Connect with Me
                    </h3>
                    <div className="flex justify-center mt-4 space-x-4">
                        <a href={mentor?.profile?.social?.linkedin} target="_blank" className="text-green-600 hover:text-green-800 transition-transform transform hover:scale-110">
                            <AiFillLinkedin className="text-3xl" />
                        </a>
                        <a href={mentor?.profile?.social?.github || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110">
                            <AiFillGithub className="text-3xl" />
                        </a>
                        <a href={mentor?.profile?.social?.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110">
                            <AiFillTwitterCircle className="text-3xl" />
                        </a>
                        <a href={mentor?.profile?.social?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110">
                            <AiFillFacebook className="text-3xl" />
                        </a>
                        <a href={mentor?.profile?.social?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110">
                            <AiFillInstagram className="text-3xl" />
                        </a>
                    </div>
                </div>
            </aside>
            <main className='bg-gray-100 w-2/3 h-screen'>
                <h1 className='text-2xl font-bold text-left mt-4 px-6'>Book a Session</h1>
                <div className='flex gap-6 px-6 py-8'>
                    {
                        services?.map((service) => {
                            return <div className="p-4 w-[350px] bg-gray-100 shadow-2xl cursor-pointer group rounded-2xl transition-all duration-300 hover:scale-105">
                                <div className="py-2 text-2xl font-bold lg:pb-6">
                                    {service?.serviceName}

                                </div>
                                <div className="p-4 bg-gray-200 group-hover:bg-gray-300 rounded-2xl transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        {/* Left Section */}
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-8 h-8 text-blue-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                                />
                                            </svg>
                                            <div className="flex flex-col ml-3">
                                                <div className="text-lg font-bold text-gray-700">
                                                    {service?.duration} mins
                                                </div>
                                                <div className="text-sm text-gray-500">Video Meeting</div>
                                            </div>
                                        </div>

                                        {/* Price Section */}
                                        <div className="flex items-center px-3 py-2 border border-gray-600 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                            <span className="font-bold text-lg mx-2"
                                                onClick={() => handlePayment(service?.price || '500')}
                                            >
                                                ₹{service?.price}
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default BookSessionPage