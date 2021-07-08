import React, { createContext, useContext, useState } from "react";
import { setupAuthHeaders } from "../../utils/setupAuthHeaders";
import axios, { AxiosError } from "axios";
import { ServerError } from "../../services/serverError.types";
import {
  LoginResponse,
  LoginUser,
  AuthProviderContext,
  LocalStorageLogin,
} from "./auth.types";
import { API_LOGIN } from "../../utils/urls";
import { useLocalStorage } from "../../hooks";

export const AuthContext = createContext<AuthProviderContext>(
  {} as AuthProviderContext
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [storedLoginStatus, setStoredLoginStatus] =
    useLocalStorage<LocalStorageLogin>("brainYogaLogin", {
      isUserLoggedIn: false,
      token: "noToken",
    });

  const [isUserLoggedIn, setLogin] = useState<boolean>(
    () => storedLoginStatus.isUserLoggedIn
  );

  const [token, setToken] = useState<string>(() => storedLoginStatus.token);

  setupAuthHeaders(token);

  const loginUserWithCredentials = async (
    username: string,
    password: string
  ): Promise<LoginResponse | ServerError> => {
    try {
      const response = await axios.post<LoginResponse>(API_LOGIN, {
        username,
        password,
      });

      if (response.data.success) {
        loginUser(response?.data.user);
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.log(error);
      return {
        success: false,
        message: "Could not login in",
        errorMessage: "Something went wrong",
      };
    }

    function loginUser(user: LoginUser) {
      const { token } = user;
      setLogin(true);
      setToken(token);
      setStoredLoginStatus({ isUserLoggedIn: true, token });
    }
  };

  function logout(): void {
    localStorage.removeItem("brainYogaLogin");
    setLogin(false);
    setToken("noToken");
  }

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, loginUserWithCredentials, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
