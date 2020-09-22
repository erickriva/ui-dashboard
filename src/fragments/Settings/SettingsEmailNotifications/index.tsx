import React from "react";
import { Check } from "react-bootstrap-icons";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Flex from "../../../components/Flex";
import Switch from "../../../components/Switch";

import { Container, Option, OptionDescription, OptionsContainer, Subtitle, Title, TitleContainer } from "./styles";

const SettingsEmailNotifications: React.FC = () => {
	return (
		<Card>
			<Flex flexDirection="column" flex="1 1 auto">
				<Flex flex={1}>
					<Container flexDirection="column" flex="0 1 50%">
						<TitleContainer>
							<Title>Activity Notifications</Title>
							<Subtitle>Email me when:</Subtitle>
						</TitleContainer>

						<OptionsContainer>
							<Option>
								<OptionDescription>someone comments on one of my best posts</OptionDescription>
								<Switch value={false} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>someone mentions me</OptionDescription>
								<Switch value={false} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>I receive friendship invitations</OptionDescription>
								<Switch value={true} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>someone accepts my invitation</OptionDescription>
								<Switch value={true} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>anyone follows me</OptionDescription>
								<Switch value={true} onChange={() => {}} />
							</Option>
						</OptionsContainer>
					</Container>

					<Container flexDirection="column" flex="0 1 50%">
						<TitleContainer>
							<Title>Weekly Emails</Title>
							<Subtitle>Email me every week about:</Subtitle>
						</TitleContainer>

						<OptionsContainer>
							<Option>
								<OptionDescription>my most commented posts</OptionDescription>
								<Switch value={false} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>mentions to me</OptionDescription>
								<Switch value={false} onChange={() => {}} />
							</Option>

							<Option>
								<OptionDescription>new friends</OptionDescription>
								<Switch value={true} onChange={() => {}} />
							</Option>
						</OptionsContainer>
					</Container>
				</Flex>

				<Flex flexDirection="column" padding={16} style={{ alignSelf: "flex-end" }}>
					<Button icon={<Check />} visualType="success">
						Save changes
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
};

export default SettingsEmailNotifications;
