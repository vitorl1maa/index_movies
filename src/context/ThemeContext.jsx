import { useContext, createContext } from "react";

const ThemeContext = createContext();

export function ThemeContext({children, value}) {
  return <ThemeContext.Provaider value={value}>
    {children}
  </ThemeContext.Provaider>
}

export function useThemeContext() {
  return useContext(ThemeContext)
};