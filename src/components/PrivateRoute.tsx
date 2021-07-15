import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts";

type PrivateRouteType = {
  path: string;
  element: any;
};

export const PrivateRoute = ({ path, element, ...props }: PrivateRouteType) => {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? (
    <Route {...props} path={path} element={element} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
