export type VisualType = "default" | "success" | "warning" | "danger";

export type ThemeType = "dark" | "light";

export type IThemeColors<T = string> = {
	[index in VisualType]: T;
} & {
	accent: T;
	background: T;
	textDark: T;
	textLight: T;
	border: T;
};

export interface Theme {
	name: ThemeType;
	colors: IThemeColors;
}
