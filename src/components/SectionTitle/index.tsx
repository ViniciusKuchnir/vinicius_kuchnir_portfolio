import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge"
import { ElementType } from "react"

interface ISectionTitle {
    icon: ElementType;
    label: string;
    title: string;
    centered?: boolean
}

const SectionTitle = ({icon: Icon, label, title, centered}: ISectionTitle) => {

  const { t } = useTranslation();

  return (
    <div className={`space-y-4 ${centered ? 'w-full flex flex-col justify-center items-center' : ''}`}>
            <Badge className="w-max flex gap-1 bg-[#4D5BCE] text-white">
            <Icon size={24} />
            <span>{t(label)}</span>
            </Badge>
            <h1 className="text-2xl font-bold">{t(title)}</h1>
        </div>
  )
}

export default SectionTitle