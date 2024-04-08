import { useTranslation } from "react-i18next";

interface IJob {
  label: string;
  text: string;
}

const Job = ({ label, text }: IJob) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-base">{t(label)}</span>
      <span className="text-3xl font-bold text-[#4D5BCE]">{t(text)}</span>
    </div>
  );
};

export default Job;
