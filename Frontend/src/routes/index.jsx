import Home from "../pages/Home"
import Signup from "../components/Signup"
import Signin from "../components/Signin"
import Profile from "../pages/dashboard/Profile"

const routes = [
    {
        path: "/",
        element: <Home />,
        isProtected: false
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
        path: "/dashboard/profile",
        element: <Profile />,
        isProtected: true
    }
]

export default routes