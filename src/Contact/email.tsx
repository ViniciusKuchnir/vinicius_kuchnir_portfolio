import { useState } from "react";
import { BsFillSendFill, BsCopy } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Email = () => {
  const [emailIsCopied, setEmailIsCopied] = useState<boolean>(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("viniciuskuchnirodrigues@gmail.com");
    setEmailIsCopied(true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-center md:w-max">
      <BsFillSendFill className="hidden md:flex text-[#4D5BCE]" size={24} />
      <span className="text-[#4D5BCE]">Email:</span>
      <div className="flex gap-2 items-center">
        <span className="text-[#607B96]">
          viniciuskuchnirodrigues@gmail.com
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <button onClick={() => copyEmail()}>
                <BsCopy
                  className={`w-5 h-5 ${emailIsCopied ? "text-[#43D9AD]" : "text-[#4D5BCE]"}`}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>{emailIsCopied ? "Copied!" : "Copy"}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Email;
