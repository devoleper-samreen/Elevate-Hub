import React from 'react'
import { useParams } from 'react-router-dom'
import {
    AiOutlineUser,
    AiOutlineMail,
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";

function BookSessionPage() {
    const { mentorId } = useParams()
    const mentor = '123'

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
                    <p className="mx-2 text-sm font-medium text-gray-600 my-8">
                        {mentor?.email || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, in assumenda aut consequatur nihil temporibus nesciunt neque impedit accusantium quae!"}

                    </p>

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
            <main className='bg-gray-100 w-2/3 h-screen'></main>
        </div>
    )
}

export default BookSessionPage