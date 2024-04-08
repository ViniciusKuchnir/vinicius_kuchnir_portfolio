import { Experience } from "@/types/experience";
import Card from "./card";
import { useTranslation } from "react-i18next";

interface IArea {
  name: string;
  data: Experience[];
}

const Area = ({ name, data }: IArea) => {

  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <h2 className="text-base font-extrabold md:text-center">{t(`${name} area`)}</h2>
      <div className="flex space-x-3 overflow-x-scroll pb-2 md:flex-col md:items-center md:overflow-auto md:space-x-0 md:space-y-3">
        {data.map((experience, index) => (
          <Card
          key={index}
          name={experience.name}
          description={experience.description}
          company={experience.company}
          startDate={experience.startDate}
          endDate={experience.endDate}
          isCurrent={experience.isCurrent}
        />
        ))}
      </div>
    </div>
  );
};

export default Area;
