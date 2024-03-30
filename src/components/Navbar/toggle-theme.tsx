import { useTheme } from "@/hooks/useTheme";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button type="button" onClick={toggleTheme}>
          {theme === "dark" ? (
            <RiSunLine className="text-[#607B96]" size={24} />
          ) : (
            <RiMoonFill className="text-[#607B96]" size={24} />
          )}
        </button>
  )
}

export default ToggleTheme