import React, { useEffect, useState } from 'react'
import useMentorStore from "../store/mentors"
import MentorCard from './MentorCard'
import { Button, Spin } from "antd"
import mentorApi from '../apiManager/mentor'
import { useNavigate } from "react-router-dom"

function TopMentors() {
    const navigate = useNavigate()
    const [topMentors, setTopMentors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { setMentorsData } = useMentorStore()

    const selectTopMentor = (mentors) => {
        const topSelectedMentors = []
        const totalMentor = mentors.length

        while (topSelectedMentors.length < 4 && topSelectedMentors.length < totalMentor) {
            const randomIndex = Math.floor(Math.random() * totalMentor)
            const randomMentor = mentors[randomIndex]
            if (!topSelectedMentors.includes(randomMentor)) {
                topSelectedMentors.push(randomMentor)
            }
        }

        return topSelectedMentors

    }

    const fetchAllMentors = async () => {
        try {
            const response = await mentorApi.getAllMentors()
            const allMentors = response?.data?.mentors || []
            setMentorsData(allMentors)
            setTopMentors(selectTopMentor(allMentors))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllMentors()
    }, [])

    return (
        <div className='max-w-[1050px] mx-auto'>
            <h1 className='text-3xl font-bold text-green-700 mb-10'>Top Mentors</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {topMentors.map((mentor) => {
                    return <MentorCard mentor={mentor} key={mentor?._id} />
                })}
            </div>
            <button
                className='bg-green-300 text-lg py-2 px-5 rounded-lg outline-none border-none font-bold text-green-700 transition transform hover:scale-105 mt-16'
                onClick={() => navigate("/mentors")}
            >
                View All
            </button>
        </div>
    )
}

export default TopMentors