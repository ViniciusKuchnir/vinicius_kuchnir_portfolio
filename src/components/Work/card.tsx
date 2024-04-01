import { ElementType } from "react";

interface ICard {
  icon: ElementType;
  label: string;
  text: string;
}

const Card = ({ icon: Icon, label, text }: ICard) => {
  return (
    <div className="flex w-60 h-60 flex-col justify-center items-center border border-[#4D5BCE] rounded-2xl p-6">
      <div className="flex flex-col items-center justify-center">
        <Icon className="w-16 h-16 text-[#4D5BCE]" />
        <span className="text-base text-center">{label}</span>
        <span className="text-2xl font-bold text-center">{text}</span>
      </div>
    </div>
  );
};

export default Card;
