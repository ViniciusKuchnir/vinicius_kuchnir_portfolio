import SectionTitle from "../SectionTitle";
import { GiSkills } from "react-icons/gi";
import { FaReact, FaNodeJs, FaGithub, FaPython, FaDocker, FaJava  } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRabbitmq, SiJest, SiSwagger  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPostgresql, DiMysql, DiTrello } from "react-icons/di";
import Skill from "./skill";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation();

  return (
    <section className="p-4 space-y-8" id="skills">
      <SectionTitle
        icon={GiSkills}
        label="Skills-Experiences"
        title="Technologies and skills"
        centered
      />
    <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col justify-center items-center">
            <span className="text-[#43D9AD]">{'>'} {t('Techs I use on a daily basis')}</span>
            <div className="w-full flex p-2 gap-4 overflow-x-scroll md:overflow-x-auto md:justify-center">
                <Skill icon={FaReact} label="React" />
                <Skill icon={SiTypescript} label="Typescript" />
                <Skill icon={IoLogoJavascript} label="Javascript" />
                <Skill icon={SiTailwindcss} label="TailwindCSS" />
                <Skill icon={FaNodeJs} label="NodeJS" />
                <Skill icon={DiMysql} label="MySQL" />
                <Skill icon={FaGithub} label="GitHub" />
            </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <span className="text-[#43D9AD] text-center">{'>'} {t("Other techs I've worked with")}</span>
            <div className="w-full flex p-2 gap-4 overflow-x-scroll md:overflow-x-auto md:justify-center">
                <Skill icon={SiSwagger} label="Swagger" />
                <Skill icon={SiJest} label="Jest" />
                <Skill icon={FaJava} label="Java" />
                <Skill icon={SiRabbitmq} label="RabbitMQ" />
                <Skill icon={FaPython} label="Python" />
                <Skill icon={DiPostgresql} label="PostgresSQL" />
                <Skill icon={FaDocker} label="Docker" />
                <Skill icon={DiTrello} label="Trello" />
            </div>
        </div>
    </div>
    </section>
  );
};

export default Skills;
