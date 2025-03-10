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

    const fetchAllMentors = async () => {
        try {
            const response = await mentorApi.getAllMentors()
            const allMentors = response?.data?.mentors || []
            setMentorsData(allMentors)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllMentors()
    }, [])

    return (
        <div>TopMentors</div>
    )
}

export default TopMentors