import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavbarLinks() {
  const { t } = useTranslation();

  return (
    <>
      {["home", "about", "contact"].map((item) => (
        <Link
          key={item}
          to={`/${item === "home" ? "" : item}`}
          className="text-lightText dark:text-darkText font-medium hover:text-primaryHover dark:hover:text-primaryHover transition-colors duration-navbar relative group"
        >
          {t(item)}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
        </Link>
      ))}
      <Link
        to="/login"
        className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primaryHover transition-all duration-navbar shadow-glass text-sm font-medium"
      >
        {t("login") || "Login"}
      </Link>
    </>
  );
}
