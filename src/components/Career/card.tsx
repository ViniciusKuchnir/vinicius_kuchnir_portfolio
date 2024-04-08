import { Experience } from "@/types/experience";
import { useTranslation } from "react-i18next";

const Card = ({
  name,
  description,
  company,
  startDate,
  endDate,
  isCurrent,
}: Experience) => {

  const { t, i18n } = useTranslation();

  const formatPeriod = (
    startDate: Date | null,
    isCurrent: boolean,
    endDate: Date | null
  ): string => {
    const startMonthDate = startDate
      ?.toLocaleString("en-US", { month: "short" })
      .replace(".", "");
    const startYearDate = startDate?.getFullYear();
    const startDateFormated = `${startMonthDate}/${startYearDate}`;

    if (isCurrent) {
      return `${startDateFormated} - Currently`;
    }

    const selectedLanguage = i18n.language;

    const endMonthDate = endDate
      ?.toLocaleString(selectedLanguage, { month: "short" })
      .replace(".", "");
    const finalYearDate = endDate?.getFullYear();
    const endDateFormated = `${endMonthDate}/${finalYearDate}`;

    return `${startDateFormated} - ${endDateFormated}`;
  };

  const calculatePeriod = (startDate: Date, endDate: Date): string => {
    const diffMonths = Math.abs(
      startDate.getMonth() -
        endDate.getMonth() +
        12 * (startDate.getFullYear() - endDate.getFullYear())
    );
    return `${diffMonths} ${diffMonths <= 1 ? t("month") : t("months")}`;
  };

  return (
    <div className="min-w-80 w-max p-4 flex flex-col justify-between items-center rounded-md border border-[#4D5BCE] md:max-w-96 md:h-52">
      <div className="w-full mb-5">
        <div className="mb-3">
          <h1 className="text-base font-bold">{t(name)}</h1>
          <span className="text-xs text-[#43D9AD]">{t(company)}</span>
        </div>
        <p className="text-sm text-[#607B96] text-justify">{t(description)}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="text-xs font-bold text-[#43D9AD]">
          {">"}{" "}
          {startDate && endDate
            ? calculatePeriod(startDate, endDate)
            : t('Unperiodized')}
        </span>
        <span className="text-xs text-[#43D9AD]">
          {">"} {startDate && endDate ? formatPeriod(startDate, isCurrent, endDate) : t('Unperiodized')}
        </span>
      </div>
    </div>
  );
};

export default Card;
