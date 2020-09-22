import { ComponentType } from "react";

export interface SettingOption {
	id: string;
	icon: ComponentType;
	title: string;
	subtitle?: string;
	active?: boolean;
}
