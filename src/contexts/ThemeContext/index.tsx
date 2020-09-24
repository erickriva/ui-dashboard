import React from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme";

export const MyThemeContext = React.createContext({
	darkMode: false,
	theme: getTheme("light"),
	toggleDarkMode: () => {}
});

export const MyThemeProvider: React.FC = ({ children }) => {
	const [darkMode, setDarkMode] = React.useState(localStorage.getItem("theme") === "dark" ?? false);

	// To toggle between themes
	const toggleDarkMode = () => {
		const isDark = !darkMode;
		localStorage.setItem("theme", isDark ? "dark" : "light");
		setDarkMode(isDark);
	};

	// Filter the styles based on the theme selected
	const theme = darkMode ? getTheme("dark") : getTheme("light");

	return (
		<MyThemeContext.Provider value={{ theme, darkMode, toggleDarkMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</MyThemeContext.Provider>
	);
};
