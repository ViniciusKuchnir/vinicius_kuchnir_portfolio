import { Badge } from "../ui/badge";
import { PiHandWaving } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import SocialMediaIcon from "./social-media-icon";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PersonalApresentation = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full space-y-10 md:flex md:flex-col md:justify-between">
      <Badge className="w-max flex gap-1 bg-[#4D5BCE] text-white">
        <PiHandWaving size={24} />
        <span className="">{t('Greetings')}</span>
      </Badge>
      <div>
        <span className="text-lg">{t('Hi all. I am')}</span>
        <h1 className="text-6xl">Vinícius Kuchnir</h1>
        <span className="flex items-center text-xl text-[#43D9AD]">
          {">"} {t('Full Stack Developer')}
        </span>
      </div>
      <div className="w-full flex flex-col">
        <span className="text-[#607B96]">// {t('Find my profile on Github')}: </span>
        <p className="flex gap-1 w-full flex-wrap">
          <span className="text-[#4D5BCE]">const</span>
          <span className="text-[#43D9AD]">githubLink</span> =
          <a
            className="text-[#E99287] underline"
            href="https://github.com/ViniciusKuchnir"
            target="_blank"
          >
            "https://github.com/ViniciusKuchnir"
          </a>
          <TbHandClick size={24} className="text-[#4D5BCE] -rotate-12" />
        </p>
      </div>
      <div className="flex gap-2 pl-4">
        <SocialMediaIcon href="https://www.linkedin.com/in/viniciuskuchnir/" icon={FaLinkedinIn} backgroundColor="#0077B5">
          Linkedin
        </SocialMediaIcon>
        <SocialMediaIcon href="https://wa.me/+5541920005277" icon={FaWhatsapp} backgroundColor="#25d366">
          WhatsApp
        </SocialMediaIcon>
      </div>
    </div>
  );
};

export default PersonalApresentation;
