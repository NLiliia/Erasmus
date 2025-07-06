import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

const AdminPanel = () => {
    return (
        <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex flex-col flex-1 min-h-screen p-6 bg-gray-50 overflow-y-auto">
                <div className="flex-1">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
