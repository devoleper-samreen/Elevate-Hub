import './App.css'
import Nav from "./components/Nav"
import { Toaster } from "react-hot-toast"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from "./routes/index"
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signup/student" || location.pathname === "/signup/mentor" || location.pathname === "/signin";

  return (
    <div className='mx-auto, max-w-screen-3xl'>
      <Toaster position='top-center' />
      {!hideNavbar && <Nav />}
      <Routes>
        {
          routes.map((route) => (
            <Route key={route.path} path={route.path} element={<RouteElement route={route} />} />
          ))
        }
      </Routes>
    </div>

  )
}

const RouteElement = ({ route }) => {
  return route.isProtected ? (
    <ProtectedRoute>{route.element}</ProtectedRoute>
  ) : (
    <>
      {route.element}
    </>
  )

}

export default App
