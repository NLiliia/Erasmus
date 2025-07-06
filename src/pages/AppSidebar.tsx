import { useAuth } from "../contexts/AuthContext";
import { Store, Package, ShoppingBag, PieChart, LogOut, Contact } from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const AppSidebar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    const role = 'admin'; // временно хардкодим
    const menuItems = role === 'admin' ? [
        { title: "Articles", url: "/admin/articles", icon: Package },
        { title: "Categories", url: "/admin/categories", icon: Store },
        { title: "Videos", url: "/admin/videos", icon: ShoppingBag },
        { title: "Images", url: "/admin/images", icon: PieChart },
        { title: "Contacts", url: "/admin/contacts", icon: Contact },
    ] : [];

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Erasmus Portal</h2>
                <p className="text-sm text-gray-600 mb-6">Admin</p>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.title}
                            to={item.url}
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                isActive(item.url)
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <item.icon className="w-5 h-5 mr-2" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t">
                <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    Exit
                </button>
            </div>
        </aside>
    );
};

export default AppSidebar;