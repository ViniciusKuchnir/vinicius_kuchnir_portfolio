import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import MediaIcon from "./MediaIcon";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="w-full h-12 flex flex-item justify-between border border-t-[#607B96] px-2">
      <div className="w-max flex">
        <div className="hidden w-max md:flex flex-col justify-center items-center border-r border-r-[#607B96] text-[#607B96] p-2">
          <span className="text-base">{t('Find me in')}:</span>
        </div>
        <MediaIcon
          icon={SiInstagram}
          href="https://www.instagram.com/vinicius_kuchnir/"
        />
        <MediaIcon
          icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/viniciuskuchnir/"
        />
      </div>
      <a
        href="https://github.com/ViniciusKuchnir"
        className="w-max flex items-center gap-1 border-l border-l-[#607B96] text-[#607B96] p-2"
        target="_blank"
      >
        <span className="text-sm">@ViniciusKuchnir</span>
        <SiGithub size={20} />
      </a>
    </footer>
  );
};

export default Footer;
