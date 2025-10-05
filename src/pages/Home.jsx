import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600">
        {t("welcomeMessage")}
      </h1>
      <p className="text-gray-600 mt-3">{t("homeDescription")}</p>
    </div>
  );
}
