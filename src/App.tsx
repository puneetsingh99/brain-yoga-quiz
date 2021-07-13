import "./index.css";
import "./custom-styles.css";
import { useTheme } from "./contexts";
import { Home, QuizDetail, Login, TakeQuiz, Signup, Account } from "./pages";
import { Routes, Route } from "react-router";
import {
  ROUTE_ACCOUNT,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_QUIZ_DETAIL,
  ROUTE_SIGN_UP,
  ROUTE_TAKE_QUIZ,
} from "./utils/routes";
import { PrivateRoute } from "./components";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <main className="min-h-screen bg-gray-100  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_QUIZ_DETAIL} element={<QuizDetail />} />
          <Route path={ROUTE_LOGIN} element={<Login />} />
          <Route path={ROUTE_SIGN_UP} element={<Signup />} />
          <PrivateRoute path={ROUTE_TAKE_QUIZ} element={<TakeQuiz />} />
          <PrivateRoute path={ROUTE_ACCOUNT} element={<Account />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
