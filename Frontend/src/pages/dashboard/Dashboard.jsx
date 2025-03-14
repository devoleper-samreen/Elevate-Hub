import React from "react";
import Sidebar from "../../components/Sidebar";
//import DashboardNavbar from "../../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            {/* <DashboardNavbar /> */}
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;