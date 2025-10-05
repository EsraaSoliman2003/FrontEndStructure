import { Link, useLocation } from "react-router-dom";
import { Home, Info, Settings } from "lucide-react"; // أيقونات بسيطة

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="hidden md:flex flex-col w-56 h-screen bg-white border-r shadow-sm">
      <div className="p-4 text-2xl font-bold text-blue-600 border-b">
        MyApp
      </div>

      <nav className="flex-1 p-3 space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyApp
      </div>
    </aside>
  );
}
