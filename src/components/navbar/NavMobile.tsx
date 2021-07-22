import { useTheme } from "../../contexts";
import { Sun, Moon, Home, User } from "react-feather";
import { useLocation } from "react-router";
import { ROUTE_ACCOUNT, ROUTE_HOME } from "../../utils/routes";
import { Link } from "react-router-dom";

export const NavMobile = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  return (
    <section className="fixed w-full bottom-0 z-10 shadow-sm border-t dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-900 shadow-sm  sm:hidden pt-1">
      <nav className="w-8/12 m-auto relative flex justify-between items-center">
        <Link to={ROUTE_ACCOUNT} className="text-link">
          <div
            className={`p-4 cursor-pointer ${
              pathname === ROUTE_ACCOUNT ? `active-route` : `inactive`
            }`}
          >
            <User />
          </div>
        </Link>

        <Link to={ROUTE_HOME} className="text-link">
          <div
            className={`p-4 cursor-pointer ${
              pathname === ROUTE_HOME ? `active-route` : `inactive`
            }`}
          >
            <Home />
          </div>
        </Link>

        <div
          className="p-4  flex items-center dark:hover:text-dark-200 hover:text-gray-700"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </nav>
    </section>
  );
};
