import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-3">
        {t("aboutTitle")}
      </h1>
      <p className="text-gray-700">{t("aboutDescription")}</p>
    </div>
  );
}
