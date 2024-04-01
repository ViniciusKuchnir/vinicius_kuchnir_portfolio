import { Badge } from "../ui/badge";
import { RxPerson } from "react-icons/rx";

const Presentation = () => {
  return (
    <div className="space-y-8 w-full">
        <div className="space-y-4">
            <Badge className="w-max flex gap-1 bg-[#4D5BCE] text-white">
            <RxPerson size={24} />
            <span className="">About me</span>
            </Badge>
            <h1 className="text-2xl font-bold">Vinícius Kuchnir Rodrigues Pinto</h1>
        </div>
        <div className="space-y-4">
            <p className="text-[#607B96] text-justify flex flex-col">
                <span>{'{'}/*</span>
                Software Engineering student at the Pontifical Catholic University of Paraná (PUCPR) with a special passion for web development using technologies such as ReactJS and NodeJS. My academic career is marked by a tireless commitment to excellence, reflected in my involvement in various areas of my university.
                <span>*/{'}'}</span>
            </p>
            <p className="text-[#607B96] text-justify">
                🚀Committed to <span className="text-[#4D5BCE]">excellence</span>: creating  <span className="text-[#E99287]">quality</span>, exceeding <span className="text-[#43D9AD]">expectations</span>.
            </p>
        </div>
      </div>
  )
}

export default Presentation