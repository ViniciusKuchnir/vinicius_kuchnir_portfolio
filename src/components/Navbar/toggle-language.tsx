import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { languageNames } from "./languages-name";

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <Select onValueChange={(language: string) => handleChangeLanguage(language)} >
      <SelectTrigger className="w-max flex gap-2">
        <span>{t(languageNames[selectedLanguage])}</span>
      </SelectTrigger>
      <SelectContent>
      {Object.keys(languageNames).map((languageCode) => (
          <SelectItem key={languageCode} value={languageCode}>
            {t(languageNames[languageCode])}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ToggleLanguage;
