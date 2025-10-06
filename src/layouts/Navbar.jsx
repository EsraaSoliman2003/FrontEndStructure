import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/themeStore";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText backdrop-blur-sm shadow-glass dark:shadow-glassDark transition-all duration-navbar ${
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
          <Link
            to="/"
            className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
          >
            {t("home")}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
          >
            {t("about")}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
          >
            {t("contact")}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
          </Link>
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="bg-accentColor text-white px-5 py-2.5 rounded-full hover:bg-accentColorHover transition-all duration-navbar backdrop-blur-xs text-sm font-medium shadow-glass hover:shadow-md"
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </button>

          {/* Theme toggle icon */}
          <button
            onClick={toggleTheme}
            className="bg-transparent text-primary dark:text-yellow-300 border-none p-3 rounded-full hover:bg-white/10 dark:hover:bg-gray-900/20 transition-all duration-navbar backdrop-blur-xs focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-lightText dark:text-darkText focus:outline-none bg-transparent p-3 rounded-full hover:bg-white/10 dark:hover:bg-gray-900/20 transition-all duration-navbar"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-lightBg dark:bg-darkBg border-t border-gray-200/50 dark:border-gray-700/50 transition-all duration-navbar backdrop-blur-sm">
          <nav className="flex flex-col p-6 space-y-5">
            <button
              onClick={toggleTheme}
              className="bg-transparent text-primary dark:text-yellow-300 p-3 rounded-full hover:bg-white/10 dark:hover:bg-gray-900/20 transition-all duration-navbar focus:outline-none self-end"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>
            <Link
              to="/"
              className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium hover:text-primaryHover transition-colors duration-navbar"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="bg-accentColor text-white px-5 py-2.5 rounded-full hover:bg-accentColorHover transition-all duration-navbar backdrop-blur-xs text-sm font-medium shadow-glass hover:shadow-md self-start"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}