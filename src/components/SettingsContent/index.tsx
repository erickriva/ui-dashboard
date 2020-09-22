import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SettingsTabContext } from "../../contexts/SettingsTabContext";
import { settingsOptions } from "../../pages/Settings/options";

const SettingsContent: React.FC = () => {
	const { settingId } = useParams();

	const Component = settingsOptions.find(item => item.id === settingId)?.content;
	return Component ? <Component /> : <></>;
};

export default SettingsContent;
