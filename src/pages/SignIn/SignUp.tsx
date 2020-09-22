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

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	return (
		<PublicLayout>
			<Flex flex="0 0 40%">
				<Card>
					<SignInCardContent>
						<Title>Sign up</Title>

						<SignInForm>
							<LabeledInput label="Username">
								<TextInput icon={<Person />} placeholder="Your username" />
							</LabeledInput>
							<LabeledInput label="Password">
								<TextInput icon={<Lock />} placeholder="Your password" />
							</LabeledInput>
							<Button onClick={() => navigate("/")}>Sign up</Button>
						</SignInForm>

						<LinkContainer>
							<Label>Already have an account?</Label>
							<Link onClick={() => navigate("/signin")}>Sign in</Link>
						</LinkContainer>
					</SignInCardContent>
				</Card>
			</Flex>
		</PublicLayout>
	);
};

export default SignUp;
