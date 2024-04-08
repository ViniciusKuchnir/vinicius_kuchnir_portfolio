import ToggleTheme from "./toggle-theme";
import { Menu } from "./menu";
import ToggleLanguage from "./toggle-language";


const Navbar = () => {
  return (
    <nav className="fixed w-full h-14 flex justify-between items-center border-b border-[#1E2D3D] p-3 mb-4 bg-background shadow-2xl">
      <div className="w-full flex items-center flex-row-reverse justify-end md:flex-row md:justify-start md:gap-4">
        <span className="hidden md:flex w-full text-center text-[#607B96] md:text-left md:w-max">ViniciusKuchnir</span>
        <Menu />
      </div>
      <div className="w-max flex gap-2">
        <ToggleLanguage />
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
