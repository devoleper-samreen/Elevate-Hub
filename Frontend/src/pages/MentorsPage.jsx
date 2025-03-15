import React, { useState, useEffect } from "react";
import MentorCard from "../components/MentorCard";
import useMentorStore from "../store/mentors"
import mentorApi from "../apiManager/mentor";


const MentorPage = () => {

    const { mentorsData, setMentorsData } = useMentorStore()
    const [searchValue, setSearchValue] = useState("")


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
    }, []);

    const filteredMentors = mentorsData?.filter((mentor) => {
        return mentor?.name?.toLowerCase().includes(searchValue?.toLowerCase())
    })

    return (
        <div className="max-w-[1050px] mx-auto py-6">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Book Your Session Now
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-16">
                <input
                    type="text"
                    placeholder="Search mentor..."
                    className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {
                    filteredMentors.length > 0 ? (
                        filteredMentors.map((mentor) => <MentorCard mentor={mentor} key={mentor?._id} />)
                    ) : (<p className="col-span-full text-center text-gray-500">No mentors found 😞</p>)
                }

                {!filteredMentors && mentorsData?.map((mentor) => {
                    return <MentorCard mentor={mentor} key={mentor?._id} />
                })}
            </div>
        </div>
    );
};

export default MentorPage;
