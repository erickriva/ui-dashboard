import React, { useEffect, useState } from "react";
import { Check } from "react-bootstrap-icons";
import { Button } from "../../../components/Button";
import Card from "../../../components/Card";
import Flex from "../../../components/Flex";
import Switch from "../../../components/Switch";
import Title from "../../../components/Title";
import { convertArrayToObject } from "../../../utils/arrayToObject";

import { Container, Option, OptionDescription, OptionsContainer } from "./styles";
import { EmailNotificationOption } from "./types";

const SettingsEmailNotifications: React.FC = () => {
	const options1: EmailNotificationOption[] = [
		{ key: "comments-on-my-posts", label: "someone comments on one of my best posts" },
		{ key: "someone-mentions-me", label: "someone mentions me", initialValue: true },
		{ key: "receive-friendship-invitations", label: "I receive friendship invitations" },
		{ key: "someone-accepts-my-invitation", label: "someone accepts my invitation" },
		{ key: "anyone-follows-me", label: "anyone follows me" }
	];

	const options2: EmailNotificationOption[] = [
		{ key: "weekly-most-commented-posts", label: "my most commented posts" },
		{ key: "weekly-mentions-to-me", label: "mentions to me" },
		{ key: "weekly-new-friends", label: "new friends" }
	];

	const [switchStates, setSwitchStates] = useState<{ [name: string]: boolean }>(
		convertArrayToObject([...options1, ...options2], "key", "initialValue", false)
	);

	const toggleSwitch = (key: string, value: boolean) => {
		setSwitchStates({ ...switchStates, [key]: value });
	};

	return (
		<>
			<Card>
				<Flex flexDirection="column" flex="1 1 auto">
					<Flex flex={1}>
						<Container flexDirection="column" flex="0 1 50%">
							<Title title="Activity Notifications" subtitle="I want to receive an email when:" />

							<OptionsContainer>
								{options1.map(option => {
									const value = switchStates[option.key] ?? false;
									return (
										<Option key={option.key} onClick={() => toggleSwitch(option.key, !value)}>
											<OptionDescription>{option.label}</OptionDescription>
											<Switch
												removeClickListener
												value={value}
												onChange={newValue => toggleSwitch(option.key, newValue)}
											/>
										</Option>
									);
								})}
							</OptionsContainer>
						</Container>

						<Container flexDirection="column" flex="0 1 50%">
							<Title title="Weekly Emails" subtitle="Email me every week about:" />

							<OptionsContainer>
								{options2.map(option => {
									const value = switchStates[option.key] ?? false;
									return (
										<Option key={option.key} onClick={() => toggleSwitch(option.key, !value)}>
											<OptionDescription>{option.label}</OptionDescription>
											<Switch
												removeClickListener
												value={value}
												onChange={newValue => toggleSwitch(option.key, newValue)}
											/>
										</Option>
									);
								})}
							</OptionsContainer>
						</Container>
					</Flex>

					<Flex flexDirection="column" padding="0 16px 16px 16px" style={{ alignSelf: "flex-end" }}>
						<Button
							visualType="success"
							onClick={() =>
								alert(
									`${
										Object.entries(switchStates).filter(([key, value]) => value).length
									} switches are on`
								)
							}>
							Save my changes
						</Button>
					</Flex>
				</Flex>
			</Card>
		</>
	);
};

export default SettingsEmailNotifications;
