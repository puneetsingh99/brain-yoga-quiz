import { Sun, Moon } from "react-feather";
import { useTheme } from "../../contexts";
import { useNavigate, useLocation } from "react-router";
import { ROUTE_HOME } from "../../utils/routes";

export const NavDesktop = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="w-8/12 hidden sm:flex justify-between items-center sm:w-4/12">
      <p
        onClick={() => navigate(ROUTE_HOME)}
        className={`sm:py-4 sm:block font-semibold text-lg text-gray-900 dark:text-gray-100 dark:hover:text-dark-200 hover:text-gray-700 cursor-pointer ${
          pathname === ROUTE_HOME && `active-route`
        }`}
      >
        Home
      </p>

      <p className="sm:block text-lg font-semibold dark:text-gray-50 cursor-pointer  dark:hover:text-dark-200 hover:text-gray-700">
        Account
      </p>

      <div
        className="cursor-pointer flex items-center text-2xl sm:text-xl  dark:hover:text-dark-200 hover:text-gray-700"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </div>
    </nav>
  );
};
