import { ElementType, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ISocialMediaIcon {
  icon: ElementType;
  children: ReactNode;
  href: string;
  backgroundColor: string;
}

const SocialMediaIcon = ({ 
  icon: Icon, 
  children, 
  href,
  backgroundColor,
}: ISocialMediaIcon) => {
  return (
    <a target="_blank" href={href}>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{backgroundColor}}
          >
            <Icon size={24} />
          </TooltipTrigger>
          <TooltipContent>
            <span>{children}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </a>
  );
};

export default SocialMediaIcon;
