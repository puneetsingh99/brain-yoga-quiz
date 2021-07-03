import "./index.css";
import "./custom-styles.css";
import { useTheme } from "./hooks";
import { Home, QuizDetail } from "./pages";
import { Routes, Route } from "react-router";
import { ROUTE_HOME, ROUTE_QUIZ_DETAIL } from "./utils/routes";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <main className="min-h-screen bg-light-100  dark:bg-gray-900 text-light-800 dark:text-dark-100">
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_QUIZ_DETAIL} element={<QuizDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
