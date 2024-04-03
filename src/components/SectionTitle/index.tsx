import { Badge } from "../ui/badge"
import { ElementType } from "react"

interface ISectionTitle {
    icon: ElementType;
    label: string;
    title: string;
    centered?: boolean
}

const SectionTitle = ({icon: Icon, label, title, centered}: ISectionTitle) => {
  return (
    <div className={`space-y-4 ${centered ? 'w-full flex flex-col justify-center items-center' : ''}`}>
            <Badge className="w-max flex gap-1 bg-[#4D5BCE] text-white">
            <Icon size={24} />
            <span>{label}</span>
            </Badge>
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
  )
}

export default SectionTitle