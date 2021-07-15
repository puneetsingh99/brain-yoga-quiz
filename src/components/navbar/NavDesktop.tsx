import { Sun, Moon } from "react-feather";
import { useTheme } from "../../contexts";
import { useLocation, Link } from "react-router-dom";
import { ROUTE_ACCOUNT, ROUTE_HOME } from "../../utils/routes";

export const NavDesktop = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <nav className="w-8/12 hidden sm:flex justify-between items-center sm:w-4/12">
      <Link to={ROUTE_HOME} className="text-link">
        <p
          className={`sm:px-2 sm:py-4 sm:block font-semibold text-lg text-gray-900 dark:text-gray-100 dark:hover:text-dark-200 hover:text-gray-700 cursor-pointer ${
            pathname === ROUTE_HOME && `active`
          }`}
        >
          Home
        </p>
      </Link>

      <Link to={ROUTE_ACCOUNT} className="text-link">
        <p
          className={`sm:px-2 sm:py-4  sm:block text-lg font-semibold dark:text-gray-50 cursor-pointer  dark:hover:text-dark-200 hover:text-gray-700 ${
            pathname === ROUTE_ACCOUNT && `active`
          }`}
        >
          Account
        </p>
      </Link>

      <div
        className="cursor-pointer flex items-center text-2xl sm:text-xl  dark:hover:text-dark-200 hover:text-gray-700"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </div>
    </nav>
  );
};
