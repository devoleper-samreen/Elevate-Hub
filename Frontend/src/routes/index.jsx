import Home from "../pages/Home"
import Signup from "../components/Signup"
import Signin from "../components/Signin"
import Profile from "../pages/dashboard/Profile"
import Dashboard from "../pages/dashboard/Dashboard"
import MentorPage from "../pages/MentorsPage"
import BookSessionPage from "../pages/BookSessionPage"
import Services from "../pages/Services"
import Payment from "../pages/Payment"
import BookedSession from "../pages/BookedSession"

const routes = [
    {
        path: "/",
        element: <Home />,
        isProtected: false
    },
    {
        path: "/checkout",
        element: <Payment />,
        isProtected: true
    },
    {
        path: "/signin",
        element: <Signin />,
        isProtected: false
    },
    {
        path: "/signup/:role",
        element: <Signup />,
        isProtected: false
    },
    {
        path: "/mentors",
        element: <MentorPage />,
        isProtected: false
    },
    {
        path: "/mentors/:username",
        element: <BookSessionPage />,
        isProtected: true
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        isProtected: true,
        children: [
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "booked-session",
                element: <BookedSession />
            }
        ]
    }
]

export default routes