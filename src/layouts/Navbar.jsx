import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/themeStore";

export default function Navbar() {
  const { toggleTheme } = useThemeStore();

  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <header className="shadow-sm w-full sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Theme
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            {t("home")}
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            {t("about")}
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            {t("contact")}
          </Link>

          {/* Toggle Between Languages */}
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <nav className="flex flex-col p-4 space-y-2">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Toggle Theme
            </button>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>

            {/* Button Toggle Between Languages */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
