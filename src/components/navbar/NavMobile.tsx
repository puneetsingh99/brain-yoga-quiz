import { useTheme } from "../../contexts";
import { Sun, Moon, Home, User } from "react-feather";
import { useNavigate, useLocation } from "react-router";
import { ROUTE_HOME } from "../../utils/routes";

export const NavMobile = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <section className="fixed w-full bottom-0 z-10 shadow-sm border-t dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-900 shadow-sm  sm:hidden pt-1">
      <nav className="w-8/12 m-auto relative flex justify-between items-center">
        <div className="p-4">
          <User />
        </div>

        <div
          onClick={() => navigate(ROUTE_HOME)}
          className={`p-4 cursor-pointer ${
            pathname === ROUTE_HOME && `active-route`
          }`}
        >
          <Home />
        </div>

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
