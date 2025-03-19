import React, { useEffect, useState } from "react";
import { getUserBookedSession } from "../apiManager/booking"

const BookedSession = () => {
    const [sessions, setSessions] = useState([])

    const fetchedBookedSession = async () => {
        const response = await getUserBookedSession()
        console.log(response);
        setSessions(response.data.bookedSessions)
    }
    useEffect(() => {
        fetchedBookedSession()
    }, [])

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100 h-screen">
            <h2 className="text-2xl font-bold text-left mb-10">Your Booked Sessions</h2>
            {sessions.length === 0 ? (
                <p className="text-center text-gray-500">No sessions booked yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sessions.map((session) => (
                        <div
                            key={session._id}
                            className="bg-white shadow-lg hover:scale-105 transition transform rounded-lg p-6 border border-gray-200"
                        >
                            <h3 className="text-2xl mb-3 font-semibold">{session.sessionId
                                .serviceName}</h3>
                            <p className="text-gray-500">Mentor: {session.sessionId.mentor.name}</p>
                            <p className="text-gray-500">Duration: {session.sessionId
                                .duration} mins</p>
                            <p className="text-gray-500">Price: ₹{session.sessionId
                                .price}</p>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookedSession;

