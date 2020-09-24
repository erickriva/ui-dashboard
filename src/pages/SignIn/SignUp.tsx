import React from "react";
import { Envelope, Lock, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import PublicLayout from "../../layouts/PublicLayout";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import Flex from "../../components/Flex";
import TextInput from "../../components/Input/TextInput";
import Link from "../../components/Link";

import {
	Label,
	LeftContent,
	LinkContainer,
	ProjectName,
	ProjectNameContainer,
	ProjectSlogan,
	SignInCardContent,
	SignInForm
} from "./styles";
import LabeledInput from "../../components/LabeledInput";
import Title from "../../components/Title";
import { routes } from "../../routes";

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	return (
		<PublicLayout>
			<Flex flex="0 0 75%">
				<LeftContent>
					<ProjectNameContainer>
						<ProjectName>Project Name</ProjectName>
						<ProjectSlogan>Project Slogan</ProjectSlogan>
					</ProjectNameContainer>
				</LeftContent>
				<Card>
					<SignInCardContent>
						<Title title="Sign up" subtitle="Enter your data and enjoy" />

						<SignInForm>
							<LabeledInput label="Email">
								<TextInput icon={<Envelope />} placeholder="Your email address" />
							</LabeledInput>

							<LabeledInput label="Username">
								<TextInput icon={<Person />} placeholder="Your username" />
							</LabeledInput>
							<LabeledInput label="Password">
								<TextInput type="password" icon={<Lock />} placeholder="Your password" />
							</LabeledInput>
							<Button onClick={() => navigate(routes.Home)}>Sign up</Button>
						</SignInForm>

						<LinkContainer>
							<Label>Already have an account?</Label>
							<Link onClick={() => navigate(routes.SignIn)}>Sign in</Link>
						</LinkContainer>
					</SignInCardContent>
				</Card>
			</Flex>
		</PublicLayout>
	);
};

export default SignUp;
