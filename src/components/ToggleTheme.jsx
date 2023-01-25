import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Toggle from "./Toggle";
import Sun from "../resources/sun.svg";
import Moon from "../resources/moon.svg";

export default function ToggleTheme() {
	const { themeName, setThemeName } = useTheme();

	const handleOnToggle = () => {
		setThemeName(themeName === "light" ? "dark" : "light");
	};

	return (
		<Toggle
			onClick={handleOnToggle}
			rightImageSrc={Sun}
			rightImageAlt="light mode"
			rightImageStyle={{ width: "20px", height: "20px" }}
			leftImageSrc={Moon}
			leftImageAlt="dark mode"
			leftImageStyle={{ width: "14px", height: "14px" }}
			isToggled={themeName === "dark"}
			data-cy="toggleTheme"
		/>
	);
}
