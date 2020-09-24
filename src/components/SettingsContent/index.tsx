import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SettingsTabContext } from "../../contexts/SettingsTabContext";
import { settingsOptions } from "../../pages/Settings/options";
import Flex from "../Flex";

const SettingsContent: React.FC = () => {
	const { settingId } = useParams();

	const Component = settingsOptions.find(item => item.id === settingId)?.content;
	if (!Component) return null;

	return (
		<Flex flexDirection="column" flex="1 1 auto">
			<Component />
		</Flex>
	);
};

export default SettingsContent;
