import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="text-center p-10 text-red-500 font-semibold">
      {t("notFoundMessage")}
    </div>
  );
}
