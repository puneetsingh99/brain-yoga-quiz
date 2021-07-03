import { createContext } from "react";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks";
import { Theme, ThemeState } from "./theme.types";

export const ThemeContext = createContext<ThemeState>({} as ThemeState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>(
    "theme",
    "light"
  );

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    setTheme(storedTheme);
  }, [storedTheme]);

  const toggleTheme = (): void => {
    setStoredTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
