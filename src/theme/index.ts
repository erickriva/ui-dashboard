import { Theme, ThemeType } from "./types";

const commonColors = {
	textDark: "#212121",
	textLight: "#ffffff",
	gray: "#888888"
};

const light: Theme = {
	name: "light",
	colors: {
		accent: "#ffffff",
		background: "#f6f8fd",
		border: "#e5e5e5",
		textDark: "#212121",
		textLight: "#ffffff",

		default: "#2165c7",
		success: "#469040",
		danger: "#ff8484",
		warning: "#ffc359"
	}
};

const dark: Theme = {
	name: "dark",
	colors: {
		accent: "#212121",
		background: "#333333",
		border: "#191919",
		textDark: "#ffffff",
		textLight: "#212121",

		default: "#2165c7",
		success: "#469040",
		danger: "#ff8484",
		warning: "#ffc359"
	}
};

const themes = [light, dark];

export const getTheme = (themeName: ThemeType) => {
	let themeToReturn = { ...(themes.find(theme => theme.name === themeName) ?? themes[0]), commonColors };
	return themeToReturn;
};
