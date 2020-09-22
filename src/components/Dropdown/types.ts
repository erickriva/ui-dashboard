interface BaseOption {
	icon?: string;
	text: string;
}

export interface LinkOption extends BaseOption {
	onClick: () => void;
}

export interface CheckOption extends BaseOption {
	value: boolean;
	onChange: (newValue: boolean) => void;
}

export type Options = (LinkOption | CheckOption)[];

type VerticalAlignment = "top" | "bottom";
type HorizontalAlignment = "left" | "right";
type Sizes = "small" | "medium";

interface DropdownProps {
	title?: string;
	onChangeVisibility?: (newValue: boolean) => void;
	verticalAlignment?: VerticalAlignment;
	horizontalAlignment?: HorizontalAlignment;
	size?: Sizes;
}

export interface DropdownContentProps extends DropdownProps {
	content: (closeMenu: () => void) => JSX.Element;
}

export interface DropdownMenuProps extends DropdownProps {
	options: Options;
	closeOnOptionClick?: boolean;
}

export interface MenuPosition {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}
