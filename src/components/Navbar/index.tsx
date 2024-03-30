import { RiMenuLine } from "react-icons/ri";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  return (
    <nav className="w-full h-14 flex justify-between items-center border-b border-[#1E2D3D] p-3">
      <div className="">
        <span className="text-[#607B96]">ViniciusKuchnir</span>
      </div>

      <div className="flex gap-2">
        <ToggleTheme />
        <RiMenuLine className="text-[#607B96]" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
