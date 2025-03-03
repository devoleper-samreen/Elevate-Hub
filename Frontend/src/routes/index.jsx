import Home from "../pages/Home"
import Signup from "../components/Signup"

const routes = [
    {
        path: "/",
        element: <Home />,
        isProtected: false
    },
    {
        path: "/login",
        element: <Signup />,
        isProtected: false
    },
    {
        path: "/signup/:role",
        element: <Signup />,
        isProtected: false
    }
]

export default routes