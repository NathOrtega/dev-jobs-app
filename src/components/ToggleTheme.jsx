import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import Toggle from "./Toggle"

export default function ToggleTheme() {
  const { themeName, setThemeName } = useTheme()

  const handleOnToggle = () => {
    setThemeName(prevValue => prevValue === "light" ? "dark" : "light")
  }

  React.useEffect(() => {
    window.localStorage.setItem("themeName", themeName)
  }, [themeName])

  return (
    <Toggle
      onClick={handleOnToggle} 
      rightImageSrc="../resources/sun.svg" 
      rightImageAlt="light mode"
      rightImageStyle={{width: "20px", height: "20px"}}
      leftImageSrc="../resources/moon.svg"
      leftImageAlt="dark mode"
      leftImageStyle={{width: "14px", height: "14px"}}
      isToggled={themeName === "dark"}
    />
  )
}