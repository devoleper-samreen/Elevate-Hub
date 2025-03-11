import React, { useEffect, useState } from 'react'
import useMentorStore from "../store/mentors"
import mentorsApi from "../apiManager/mentor"
import MentorCard from './MentorCard'
import { Button, Spin } from "antd"
import mentorApi from '../apiManager/mentor'

function TopMentors() {
    const [topMentors, setTopMentors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { setMentorsData } = useMentorStore()

    const selectTopMentor = (mentors) => {
        const topSelectedMentors = []
        const totalMentor = mentors.length

        while (topSelectedMentors < 4 && topSelectedMentors.length < totalMentor) {
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
            console.log(response);

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
        <div>
            <h1 className='text-3xl font-bold text-green-700 mb-10'>Top Mentors</h1>
            <div>
                {topMentors.map((mentor) => {
                    return <MentorCard mentor={mentor} key={mentor?._id} />
                })}
            </div>
            <div>
                <li>Aarav</li>
                <li>nobita</li>
                <li>doremon</li>
                <li>Zayan</li>
            </div>
        </div>
    )
}

export default TopMentors