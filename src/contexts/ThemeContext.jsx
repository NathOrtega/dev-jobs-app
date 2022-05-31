import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../Theme";

export const ThemeContext = React.createContext()

export const ThemeProvider = (props) => {
  const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [ themeName, setThemeName ] = React.useState(userPrefersDarkMode ? "dark" : "light")
  const root = document.getElementById("root")
  const bgColorTheme = themeName === "light" ? lightTheme.body.backgroundColor : darkTheme.body.backgroundColor
  const theme = themeName === "light" ? lightTheme : darkTheme

  root.style.backgroundColor = bgColorTheme
  document.body.style.backgroundColor = bgColorTheme

  return (
    <ThemeContext.Provider value={{
      themeName,
      setThemeName,
      theme
    }}>
      <StyledThemeProvider theme={theme}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return React.useContext(ThemeContext)
}

export default ThemeContext
