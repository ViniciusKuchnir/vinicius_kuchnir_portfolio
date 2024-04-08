import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppContact = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-center md:w-max">
      <Button
        className="bg-transparent border border-[#4D5BCE] text-[#4D5BCE]  duration-150 hover:bg-[#4D5BCE] hover:text-white"
        variant="secondary"
      >
        <a
          className="flex items-center gap-2"
          href="https://wa.me/+5541920005277"
          target="_blank"
        >
          <FaWhatsapp size={24} /> {t("Let's have a chat")}
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppContact;
