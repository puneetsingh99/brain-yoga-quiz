import { checkTokenExpiry } from "../utils/checkTokenExpiry";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

type PrivateRouteType = {
  path: string;
  element: any;
};

export const PrivateRoute = ({ path, element, ...props }: PrivateRouteType) => {
  const { isUserLoggedIn } = useAuth();
  const location = useLocation();

  let loginUser = !isUserLoggedIn;

  if (isUserLoggedIn) {
    const loginObject = localStorage.getItem("brainYogaLogin");

    if (loginObject) {
      const token = JSON.parse(loginObject).token;
      const expiryTime = checkTokenExpiry(token);
      const isTokenExpired = Date.now() >= expiryTime * 1000;

      if (isTokenExpired) {
        loginUser = true;
      }
    } else {
      console.log("Login object not found in the localStorage");
    }
  }

  return loginUser ? (
    <Navigate state={{ from: location.pathname }} replace to="/login" />
  ) : (
    <Route {...props} path={path} element={element} />
  );
};
