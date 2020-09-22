export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	container?: boolean;

	/****** Container Props ********/
	flexDirection?: "row" | "column";
	justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "initial" | "inherit";
	flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
	alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";

	/****** Child Props ********/
	flexGrow?: number;
	flexShrink?: number;
	flexBasis?: string | number;
	flex?: string | number;

	/****** Common Layout Props ********/
	padding?: string | number;
	margin?: string | number;
	width?: string | number;
	height?: string | number;
	maxWidth?: string | number;
	maxHeight?: string | number;
	gap?: number;
}
