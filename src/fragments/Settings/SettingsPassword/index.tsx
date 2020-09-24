import React from "react";

import { Button } from "../../../components/Button";
import Card from "../../../components/Card";
import Flex from "../../../components/Flex";
import { TextInput } from "../../../components/Input";
import LabeledInput from "../../../components/LabeledInput";
import Title from "../../../components/Title";

import {
	NewPasswordContainer,
	NewPasswordHint,
	NewPasswordHintContainer,
	NewPasswordHintItem,
	NewPasswordHintItemsContainer,
	NewPasswordHintTitle
} from "./styles";

const SettingsPassword: React.FC = () => {
	return (
		<>
			<Card>
				<Flex padding={16} gap={32}>
					<Flex flexDirection="column" gap={32} flex="1 1 auto">
						<Title
							title="Change password"
							subtitle="Here you can change your password, but first you'll have to verify your actual password"
						/>

						<LabeledInput label="Actual password">
							<TextInput type="password" placeholder="Insert your actual password" />
						</LabeledInput>

						<NewPasswordContainer>
							<LabeledInput label="New password">
								<TextInput type="password" placeholder="Insert the new password" />
							</LabeledInput>

							<LabeledInput label="Repeat password">
								<TextInput type="password" placeholder="Insert new password again" />
							</LabeledInput>

							<Flex flexDirection="column" style={{ alignSelf: "flex-end" }}>
								<Button visualType="success">change my password</Button>
							</Flex>
						</NewPasswordContainer>
					</Flex>

					<NewPasswordHintContainer>
						<NewPasswordHint>
							<NewPasswordHintTitle>Password must have:</NewPasswordHintTitle>

							<NewPasswordHintItemsContainer>
								<NewPasswordHintItem>at least 1 number or symbol.</NewPasswordHintItem>
								<NewPasswordHintItem>both uppercase and lowercase characters.</NewPasswordHintItem>
								<NewPasswordHintItem>at least 8 characters.</NewPasswordHintItem>
							</NewPasswordHintItemsContainer>
						</NewPasswordHint>
					</NewPasswordHintContainer>
				</Flex>
			</Card>
		</>
	);
};

export default SettingsPassword;
