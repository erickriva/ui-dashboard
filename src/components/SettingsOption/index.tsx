import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import classnames from "classnames";

import {
	Setting,
	SettingActiveIcon,
	SettingContent,
	SettingSubtitle,
	SettingTitle,
	SettingTitleContainer
} from "./styles";
import { SettingOption } from "./types";

const SettingsOption: React.FC<{ option: SettingOption; active?: boolean; onClick?: () => void }> = ({
	option,
	active,
	onClick
}) => {
	const SettingsOptionClassName = classnames({
		active
	});

	const Icon = option.icon;

	return (
		<Setting className={SettingsOptionClassName} onClick={onClick}>
			<SettingContent>
				<Icon />
				<SettingTitleContainer>
					<SettingTitle>{option.title}</SettingTitle>
					<SettingSubtitle>{option.subtitle}</SettingSubtitle>
				</SettingTitleContainer>
			</SettingContent>

			{active && (
				<SettingActiveIcon>
					<ChevronRight />
				</SettingActiveIcon>
			)}
		</Setting>
	);
};

export default SettingsOption;
