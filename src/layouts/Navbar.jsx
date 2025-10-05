import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next"; // 🧠 استدعاء مكتبة الترجمة
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // استخدم hook الترجمة

  // دالة لتبديل اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang); // نحفظ الاختيار للمستقبل
  };

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <span>Hi, {user.name}</span>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        )}

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

          {/* زر التبديل بين اللغات */}
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

            {/* زر تبديل اللغة في الموبايل */}
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
