import { VisualType } from "../../theme/types";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: JSX.Element;
	onClick?: () => void;
	visualType?: VisualType;
	isLoading?: boolean;
}
