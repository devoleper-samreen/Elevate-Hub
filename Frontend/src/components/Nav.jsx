import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"

function Nav() {
    const navigate = useNavigate()
    const signupStudentBtnClick = () => navigate("/signup/student")
    const signupMentorBtnClick = () => navigate("/signup/mentor")
    const signinBtnClick = () => navigate("/signin")
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white fixed top-0 left-0">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

                {/* Logo text */}
                <div className="text-xl lg:text-3xl font-bold text-green-700 cursor-pointer" onClick={() => navigate("/")}>
                    Elevate Hub
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="bg-green-600 hover:bg-green-700 transition border px-4 py-3 rounded-xl text-white" onClick={signupMentorBtnClick}>
                        Become a Mentor with us
                    </button>
                    <button className="text-green-700 px-4 py-2 rounded-full"
                        onClick={signinBtnClick}
                    >
                        Sign In
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg" onClick={signupStudentBtnClick}>
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-green-700"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md mt-8">
                    <div className="flex flex-col gap-3 p-4">
                        <button className="text-green-700 border border-green-700 px-4 py-2 rounded-full"
                            onClick={() => {
                                signupMentorBtnClick();
                                setOpen(false);
                            }}
                        >
                            Become a Mentor with Us
                        </button>
                        <button className="text-green-700 px-4 py-2 rounded-full"
                            onClick={() => {
                                signinBtnClick;
                                setOpen(false)
                            }}
                        >
                            Sign In
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-full"
                            onClick={() => {
                                signupStudentBtnClick();
                                setOpen(false);
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav
