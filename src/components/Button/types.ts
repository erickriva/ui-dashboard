import { VisualType } from "../../theme/types";

interface ButtonBase extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	visualType?: VisualType;
	isLoading?: boolean;

	outline?: boolean;
}

export interface IconButtonProps extends ButtonBase {}

export interface ButtonProps extends ButtonBase {
	children: string;
}
