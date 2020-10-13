import { VisualType } from "../../theme/types";

export interface AlertProps {
	visualType?: VisualType;
	title?: string;
	description: string;
	time?: number;
	onClose: () => void;
}
