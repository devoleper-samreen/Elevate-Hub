import React from "react";
import { NavLink } from "react-router-dom";
import useUserStore from "../store/user";

const Sidebar = () => {
    const { user } = useUserStore();
    return (
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gradient-to-r from-indigo-50 to-white border-r">
            <div className="flex flex-col items-center mt-6 -mx-2">
                <img
                    className="object-cover w-24 h-24 mx-2 rounded-full shadow-lg"
                    src={user?.photoUrl || `https://ui-avatars.com/api?name=${user?.name}`}
                    alt={`${user?.name}'s avatar`}
                />
                <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.name}</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                    {user?.email}
                </p>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {/* Profile - Accessible to all */}
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${isActive
                                ? "bg-orange-200 text-gray-800 shadow-md"
                                : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
                            }`
                        }
                    >
                        <span className="mx-4 font-medium">Profile</span>
                    </NavLink>


                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;