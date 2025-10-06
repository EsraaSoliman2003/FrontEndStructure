import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate("/");
  };

  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="flex items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-navbar"
    >
      <form
        className="flex flex-col gap-4 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-80 transition-all duration-navbar"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-primary dark:text-primaryHover text-center mb-2">
          {t("login")}
        </h2>

        <input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <input
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <button
          type="submit"
          className="w-full py-2 mt-2 bg-primary hover:bg-primaryHover text-white rounded-lg font-semibold transition-all duration-navbar"
        >
          {t("login")}
        </button>
      </form>
    </div>
  );
}
