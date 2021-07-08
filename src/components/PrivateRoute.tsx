import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts";

type PrivateRoute = {
  path: string;
};

export const PrivateRoute = ({ path, ...props }: PrivateRoute) => {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
