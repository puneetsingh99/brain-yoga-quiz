import React, { createContext, useContext, useState } from "react";
import { setupAuthHeaders } from "../../utils/setupAuthHeaders";
import axios, { AxiosError } from "axios";
import { ServerError } from "../../types/serverError.types";
import {
  LoginResponse,
  LoginUser,
  AuthProviderContext,
  LocalStorageLogin,
  SignupResponse,
  SignupUser,
} from "./auth.types";
import { API_LOGIN, API_USERS } from "../../utils/urls";
import { useLocalStorage } from "../../hooks";

export const AuthContext = createContext<AuthProviderContext>(
  {} as AuthProviderContext
);

type TokenAndUserId = {
  token: "no token" | string;
  userId: "no user" | string;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [storedLoginStatus, setStoredLoginStatus] =
    useLocalStorage<LocalStorageLogin>("brainYogaLogin", {
      isUserLoggedIn: false,
      token: "no token",
      userId: "no user",
    });

  const [isUserLoggedIn, setLogin] = useState<boolean>(
    () => storedLoginStatus.isUserLoggedIn
  );

  const [tokenAndUserId, setTokenAndUserId] = useState<TokenAndUserId>(() => ({
    token: storedLoginStatus.token,
    userId: storedLoginStatus.userId,
  }));

  const { token, userId } = tokenAndUserId;

  setupAuthHeaders(token);

  function loginUser(user: LoginUser | SignupUser) {
    const { token, userId } = user;
    setLogin(true);
    setTokenAndUserId(() => ({ token, userId }));
    setStoredLoginStatus({ isUserLoggedIn: true, token, userId });
  }

  function logout(): void {
    localStorage.removeItem("brainYogaLogin");
    setLogin(false);
    setTokenAndUserId(() => ({ token: "no token", userId: "no user" }));
  }

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
  };

  const signupUser = async (
    name: string,
    username: string,
    password: string
  ): Promise<SignupResponse | ServerError> => {
    try {
      const response = await axios.post<SignupResponse>(API_USERS, {
        name,
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
        message: "Could not Signup",
        errorMessage: "Something went wrong",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        loginUserWithCredentials,
        logout,
        token,
        userId,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
