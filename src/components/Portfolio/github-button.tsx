import { IoIosArrowDropright } from "react-icons/io";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface IButtonGithub {
    href: string;
}

const ButtonGithub = ({ href }: IButtonGithub) => {

  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-end">
      <a href={href} target="_blank">
        <Button
          variant="secondary"
          className="flex items-center gap-2 text-[#4D5BCE] bg-transparent border border-[#4D5BCE] duration-150 hover:bg-[#4D5BCE] hover:text-white"
        >
          {t('Check in Github')} <IoIosArrowDropright size={24} />
        </Button>
      </a>
    </div>
  );
};

export default ButtonGithub