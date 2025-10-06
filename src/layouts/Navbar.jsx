import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Sun,
  Moon,
  Settings,
  Globe,
  LifeBuoy,
  FileText,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/themeStore";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setDropdownOpen(false);
  };

  // Toggle theme
  const handleThemeToggle = () => {
    toggleTheme();
    setDropdownOpen(false);
  };

  // Support button
  const handleSupport = () => {
    alert("Support page coming soon!");
    setDropdownOpen(false);
  };

  // License button
  const handleLicense = () => {
    alert("License details coming soon!");
    setDropdownOpen(false);
  };

  // Close Menu When Click Outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-[72px] bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText backdrop-blur-sm shadow-[0_2px_6px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_6px_rgba(255,255,255,0.05)] transition-all duration-navbar ${
        i18n.language === "ar" ? "font-arabic" : "font-sans"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:text-primaryHover transition-colors duration-navbar relative group"
        >
          MyApp
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center">
          {["home", "about", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "home" ? "" : item}`}
              className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
            >
              {t(item)}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
            </Link>
          ))}

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primaryHover transition-all duration-navbar shadow-glass text-sm font-medium"
          >
            {t("login") || "Login"}
          </Link>

          {/* Dropdown Menu */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="p-3 bg-transparent rounded-full transition-all duration-300 focus:outline-none"
            >
              <Settings className="w-6 h-6 text-primary dark:text-yellow-300" />
            </button>

            {dropdownOpen && (
              <div className="overflow-hidden absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-200 ease-out animate-fadeIn">
                <div className="">
                  {/* Support */}
                  <button
                    onClick={handleSupport}
                    className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
                  >
                    <LifeBuoy size={18} />
                    <span>Support</span>
                  </button>

                  {/* License */}
                  <button
                    onClick={handleLicense}
                    className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
                  >
                    <FileText size={18} />
                    <span>License</span>
                  </button>

                  {/* Language */}
                  <button
                    onClick={toggleLanguage}
                    className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
                  >
                    <Globe size={18} />
                    <span>
                      {i18n.language === "en" ? "العربية" : "English"}
                    </span>
                  </button>

                  {/* Theme */}
                  <button
                    onClick={handleThemeToggle}
                    className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
                  >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                    <span>
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-lightText dark:text-darkText focus:outline-none bg-transparent p-3 rounded-full hover:bg-white/10 dark:hover:bg-gray-900/20 transition-all duration-navbar"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-lightBg dark:bg-darkBg text-center border-none">
          <nav className="flex flex-col space-y-4">
            {["home", "about", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "home" ? "" : item}`}
                className="text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover font-medium transition-colors duration-navbar"
                onClick={() => setIsOpen(false)}
              >
                {t(item)}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primaryHover transition-all duration-navbar shadow-glass text-sm font-medium"
            >
              {t("login") || "Login"}
            </Link>

            <button
              onClick={() => {
                alert("Support page coming soon!");
                setIsOpen(false);
              }}
              className="border-none bg-transparent m-auto flex items-center gap-2 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover transition-all"
            >
              <LifeBuoy size={18} />
              <span>Support</span>
            </button>

            <button
              onClick={() => {
                alert("License details coming soon!");
                setIsOpen(false);
              }}
              className="border-none bg-transparent m-auto flex items-center gap-2 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover transition-all"
            >
              <FileText size={18} />
              <span>License</span>
            </button>

            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="border-none bg-transparent m-auto flex items-center gap-2 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover transition-all"
            >
              <Globe size={18} />
              <span>{i18n.language === "en" ? "العربية" : "English"}</span>
            </button>

            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="border-none bg-transparent m-auto flex items-center gap-2 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover transition-all"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
