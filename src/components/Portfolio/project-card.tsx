import { Badge } from "../ui/badge";
import ButtonGithub from "./github-button";
import { useTranslation } from "react-i18next";

interface IProjectCard {
  title: string;
  description: string;
  languages: string[];
  href: string;
}

const ProjectCard = ({ title, description, languages, href }: IProjectCard) => {

  const { t } = useTranslation()

  return (
    <div className="w-64 h-max flex flex-col border border-[#4D5BCE] rounded-2xl p-6 space-y-8 md:h-80 md:space-y-0 md:justify-between">
      <div className="flex flex-col space-y-2">
        <span className="font-bold text-base">{title}</span>
        <span className="text-sm text-[#607B96]">/* {t(description)} */</span>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <Badge
              key={index}
              className="w-max px-2 py-1 text-xs text-white bg-[#4D5BCE] rounded-lg hover:bg-[#4D5BCE]"
            >
              {language}
            </Badge>
          ))}
        </div>
      </div>
      <ButtonGithub href={href} />
    </div>
  );
};

export default ProjectCard;
