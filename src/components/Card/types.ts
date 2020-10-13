import { VisualType } from "../../theme/types";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	isActive?: boolean;
	visualType?: VisualType;
}
