import Home from "../pages/Home"
import Signup from "../components/Signup"
import Signin from "../components/Signin"

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
    }
]

export default routes