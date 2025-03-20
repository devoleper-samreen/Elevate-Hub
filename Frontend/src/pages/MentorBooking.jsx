import { useEffect, useState } from "react";
import { getBooking } from "../apiManager/booking"

function MentorBooking() {
    const [bookings, setBookings] = useState([])

    const fecthedBooking = async () => {
        const response = await getBooking()
        console.log(response);
        setBookings(response?.data.bookings
        )
    }

    useEffect(() => {
        fecthedBooking()
    }, [])

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-10 text-left">Your Bookings</h1>

            <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-4 text-center">User Name</th>
                            <th className="p-4 text-center">Session Name</th>
                            <th className="p-4 text-center">Booking Date</th>
                            <th className="p-4 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition`}>
                                <td className="p-4 font-medium text-gray-800">{booking.userId.name}</td>
                                <td className="p-4 text-gray-700">{booking.sessionId.serviceName
                                }</td>
                                <td className="p-4 text-gray-700">{formatDate(booking.createdAt)
                                }</td>
                                <td className="p-4 font-semibold text-green-600">&#8377;{" "}
                                    {booking.sessionId.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MentorBooking;
