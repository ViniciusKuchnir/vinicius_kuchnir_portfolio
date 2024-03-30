import { useTheme } from "@/hooks/useTheme";
import { RiMenuLine, RiMoonFill, RiSunLine } from "react-icons/ri";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="w-full h-14 flex justify-between items-center border-b border-[#1E2D3D] p-3">
      <div className="">
        <span className="text-[#607B96]">ViniciusKuchnir</span>
      </div>

      <div className="flex gap-2">
        <button type="button" onClick={toggleTheme}>
          {theme === "dark" ? (
            <RiSunLine className="text-[#607B96]" size={24} />
          ) : (
            <RiMoonFill className="text-[#607B96]" size={24} />
          )}
        </button>
        <RiMenuLine className="text-[#607B96]" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
