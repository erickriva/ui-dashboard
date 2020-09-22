import React, { useContext, useState } from "react";

import { v4 as uuid } from "uuid";

import DefaultLayout from "../../layouts/DefaultLayout";

import Card from "../../components/Card";
import Flex from "../../components/Flex";

import { SettingsList, SettingsTitle } from "./styles";

import SettingsOption from "../../components/SettingsOption";
import { settingsOptions } from "./options";
import { useNavigate, useParams } from "react-router-dom";
import { useRoute } from "../../utils/useRoute";
import { SettingsTabContext } from "../../contexts/SettingsTabContext";

const Settings: React.FC = () => {
	const LOCAL_STORAGE_KEY = "settings-option";
	const navigate = useNavigate();
	const { route, outlet } = useRoute(localStorage.getItem(LOCAL_STORAGE_KEY) ?? settingsOptions[0].id);
	const [selectedOption, setSelectedOption] = React.useState(
		localStorage.getItem(LOCAL_STORAGE_KEY) ?? settingsOptions[0].id
	);

	const changeSelectedOption = (optionToChange: string) => {
		localStorage.setItem(LOCAL_STORAGE_KEY, optionToChange);
		setSelectedOption(optionToChange);
	};

	return (
		<DefaultLayout>
			<Flex>
				<Flex
					flexDirection="column"
					flex="0 0 25%"
					style={{ height: "fit-content", position: "sticky", top: 0 }}>
					<SettingsTitle>Settings</SettingsTitle>
					<Card>
						<SettingsList>
							{settingsOptions.map(option => (
								<SettingsOption
									key={uuid()}
									option={option}
									active={selectedOption === option.id}
									onClick={() => {
										changeSelectedOption(option.id);
										navigate(`${option.id}`);
									}}
								/>
							))}
						</SettingsList>
					</Card>
				</Flex>

				<Flex flex="1 1 auto">{outlet}</Flex>
			</Flex>
		</DefaultLayout>
	);
};

export default Settings;
