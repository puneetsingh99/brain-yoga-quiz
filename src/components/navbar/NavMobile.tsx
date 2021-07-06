import { useTheme } from "../../hooks";
import { Sun, Moon, Home, User } from "react-feather";

export const NavMobile = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="fixed w-screen bottom-0 z-10 py-4 px-4 shadow-sm border-t dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-900 shadow-sm  sm:hidden">
      <nav className="w-8/12 m-auto flex justify-between items-center sm:w-4/12">
        <div className="text-xl sm:text-xl cursor-pointer">
          <User />
        </div>

        <div className="text-xl sm:text-xl  cursor-pointer">
          <Home />
        </div>

        <div
          className="cursor-pointer flex items-center text-2xl dark:hover:text-dark-200 hover:text-gray-700"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </nav>
    </section>
  );
};
