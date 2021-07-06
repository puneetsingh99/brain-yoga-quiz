import { Sun, Moon, Home, User } from "react-feather";
import { useTheme } from "../../hooks";

export const NavDesktop = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-8/12 hidden sm:flex justify-between items-center sm:w-4/12">
      <p className="sm:block font-semibold text-lg text-gray-900 dark:text-gray-100 dark:hover:text-dark-200 hover:text-gray-700 cursor-pointer">
        Home
      </p>

      <div className="text-xl sm:text-xl  cursor-pointer sm:hidden">
        <Home />
      </div>

      <p className="sm:block text-lg font-semibold dark:text-gray-50 cursor-pointer  dark:hover:text-dark-200 hover:text-gray-700">
        Account
      </p>
      <div className="text-xl sm:text-xl cursor-pointer sm:hidden">
        <User />
      </div>

      <div
        className="cursor-pointer flex items-center text-2xl sm:text-xl  dark:hover:text-dark-200 hover:text-gray-700"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </div>
    </nav>
  );
};
