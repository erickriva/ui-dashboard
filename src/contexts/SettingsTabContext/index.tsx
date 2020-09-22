import React from "react";

interface SettingContextProps {
	option: string;
	changeOption: (value: string) => void;
}

export const SettingsTabContext = React.createContext<SettingContextProps>({
	option: "",
	changeOption: () => {}
});
