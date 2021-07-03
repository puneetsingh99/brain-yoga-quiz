import logo from "../../assets/brain-yoga-logo.png";
import React from "react";
import { Sun, Moon, Home, User } from "react-feather";
import { useTheme } from "../../hooks";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="p-2  sm:px-4 sm:py-0 bg-white dark:bg-gray-900">
      <nav className="flex flex-col items-center justify-between sm:flex-row sm:w-4/6 m-auto">
        <div className="text-xl font-logo flex items-center font-semibold cursor-pointer">
          <h1>Brain</h1>
          <img src={logo} alt="brain-yoga-logo" className="w-20" />
          <h1>Yogam</h1>
        </div>

        <div className="w-8/12  flex justify-between items-center sm:w-4/12">
          <p className="hidden sm:block font-semibold text-lg text-black dark:text-gray-50 cursor-pointer  dark:hover:text-dark-200 hover:text-gray-700">
            Home
          </p>

          <div className="text-xl sm:text-xl  cursor-pointer sm:hidden">
            <Home />
          </div>

          <p className="hidden sm:block text-lg font-semibold dark:text-gray-50 cursor-pointer  dark:hover:text-dark-200 hover:text-gray-700">
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
        </div>
      </nav>
    </header>
  );
};
