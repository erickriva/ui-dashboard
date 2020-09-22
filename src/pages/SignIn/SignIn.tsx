import React from "react";
import { Lock, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import PublicLayout from "../../layouts/PublicLayout";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Flex from "../../components/Flex";
import TextInput from "../../components/Input/TextInput";
import Link from "../../components/Link";

import { Label, LinkContainer, SignInCardContent, SignInForm, Title } from "./styles";
import LabeledInput from "../../components/LabeledInput";

const SignIn: React.FC = () => {
	const navigate = useNavigate();

	return (
		<PublicLayout>
			<Flex flex="0 0 40%">
				<Card>
					<SignInCardContent>
						<Title>Sign in</Title>

						<SignInForm>
							<LabeledInput label="Test">
								<Button onClick={() => navigate("/")}>Sign in</Button>
							</LabeledInput>

							<LabeledInput label="Username">
								<TextInput icon={<Person />} placeholder="Your username" />
							</LabeledInput>
							<LabeledInput label="Password">
								<TextInput type="password" icon={<Lock />} placeholder="Your password" />
							</LabeledInput>
							<Button onClick={() => navigate("/")}>Sign in</Button>
						</SignInForm>

						<LinkContainer>
							<Label>Don't have an account yet?</Label>
							<Link onClick={() => navigate("/signup")}>Sign up</Link>
						</LinkContainer>
					</SignInCardContent>
				</Card>
			</Flex>
		</PublicLayout>
	);
};

export default SignIn;
