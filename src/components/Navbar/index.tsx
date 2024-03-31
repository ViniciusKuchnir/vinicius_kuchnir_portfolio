import ToggleTheme from "./toggle-theme";
import { Menu } from "./menu";


const Navbar = () => {
  return (
    <nav className="w-full h-14 flex justify-between items-center border-b border-[#1E2D3D] p-3 mb-4">
      <div className="w-full flex items-center flex-row-reverse justify-end md:flex-row md:justify-start md:gap-4">
        <span className="w-full text-center text-[#607B96] md:text-left md:w-max">ViniciusKuchnir</span>
        <Menu />
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
