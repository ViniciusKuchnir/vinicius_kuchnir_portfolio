import React, { ElementType } from "react";

interface IMediaIcon {
  icon: ElementType;
  href: string;
}

const MediaIcon = ({ icon: Icon, href }: IMediaIcon) => {
  return (
    <a 
      className="flex items-center justify-center p-2 border border-r-[#607B96]"
      href={href}
      target="_blank"
    >
      <button className="text-[#607B96]">
        <Icon size={16} />
      </button>
    </a>
  );
};

export default MediaIcon;
