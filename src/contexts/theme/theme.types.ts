export type Theme = "light" | "dark";

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};
