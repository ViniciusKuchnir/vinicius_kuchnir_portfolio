import { ElementType } from "react";
import { useTranslation } from "react-i18next";

interface ICard {
  icon: ElementType;
  label: string;
  text: string;
}

const Card = ({ icon: Icon, label, text }: ICard) => {

  const { t } = useTranslation();

  return (
    <div className="flex w-60 h-60 flex-col justify-center items-center border border-[#4D5BCE] rounded-2xl p-6">
      <div className="flex flex-col items-center justify-center">
        <Icon className="w-16 h-16 text-[#4D5BCE]" />
        <span className="text-base text-center">{t(label)}</span>
        <span className="text-2xl font-bold text-center">{t(text)}</span>
      </div>
    </div>
  );
};

export default Card;
