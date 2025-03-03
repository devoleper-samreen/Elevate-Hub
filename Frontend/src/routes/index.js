import Home from "../pages/Home"

const routes = [
    {
        path: "/",
        element: <Home />,
        isProtected: false
    },
    {
        path: "/login",
        element: <Home />,
        isProtected: false
    }
]

export default routes