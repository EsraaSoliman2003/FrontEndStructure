import { Link, useLocation } from "react-router-dom";
import { Home, Info, Settings, Sun, Moon, Globe, LogIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/themeStore";

export default function Sidebar() {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeStore();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const links = [
    { name: t("home"), path: "/", icon: <Home size={20} /> },
    { name: t("settings"), path: "/settings", icon: <Settings size={20} /> },
    { name: t("login"), path: "/login", icon: <LogIn size={20} /> },
  ];

  return (
    <aside
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="
        hidden md:flex flex-col w-60 h-screen 
        bg-lightBg text-lightText border-r shadow-navbar 
        dark:bg-darkBg dark:text-darkText dark:border-gray-700 dark:shadow-navbarDark
        transition-all duration-navbar
      "
    >
      {/* Logo */}
      <div
        className="
          p-5 text-xl font-bold border-b 
          text-primary dark:text-primary border-gray-200 dark:border-gray-700
          transition-colors duration-navbar
        "
      >
        MyApp
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-3">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-navbar
                hover:scale-105 hover:shadow-sm
                ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-semibold"
                    : "text-grayText hover:bg-gray-100 dark:text-grayTextDark dark:hover:bg-gray-800"
                }
              `}
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Language & Theme Controls */}
      <div
        className="
          flex items-center justify-between p-4 border-t 
          border-gray-200 dark:border-gray-700
        "
      >
        {/* Language toggle */}
        <button
          onClick={toggleLanguage}
          className="
            flex items-center gap-2 bg-accentColor text-white px-4 py-2 rounded-full 
            hover:bg-accentColorHover hover:scale-105 transition-all duration-navbar 
            text-sm font-medium shadow-sm
          "
        >
          <Globe size={16} />
          {i18n.language === "en" ? "العربية" : "English"}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="
            bg-transparent text-primary dark:text-yellow-300 
            border-none p-2 rounded-full 
            hover:bg-white/10 dark:hover:bg-gray-900/20 hover:scale-110 
            transition-all duration-navbar focus:outline-none
          "
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Footer */}
      <div
        className="
          p-4 border-t text-center text-xs 
          text-grayText dark:text-grayTextDark 
          border-gray-200 dark:border-gray-700
          transition-colors duration-navbar
        "
      >
        © {new Date().getFullYear()} MyApp
      </div>
    </aside>
  );
}