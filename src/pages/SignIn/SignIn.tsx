import React from "react";
import { Lock, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import PublicLayout from "../../layouts/PublicLayout";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import Flex from "../../components/Flex";
import TextInput from "../../components/Input/TextInput";
import Link from "../../components/Link";

import {
	Label,
	LinkContainer,
	ProjectName,
	ProjectNameContainer,
	ProjectSlogan,
	SignInCardContent,
	SignInForm,
	LeftContent
} from "./styles";
import LabeledInput from "../../components/LabeledInput";
import Title from "../../components/Title";
import { routes } from "../../routes";
import Form from "../../components/Form";

const SignIn: React.FC = () => {
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
						<Title title="Sign in" subtitle="Enter your data and enjoy" />

						<SignInForm>
							<Form>
								<LabeledInput label="Username">
									<TextInput icon={<Person />} placeholder="Your username" />
								</LabeledInput>
								<LabeledInput label="Password">
									<TextInput type="password" icon={<Lock />} placeholder="Your password" />
								</LabeledInput>
								<Button onClick={() => navigate(routes.Home)}>Sign in</Button>
							</Form>
						</SignInForm>

						<LinkContainer>
							<Label>Don't have an account yet?</Label>
							<Link onClick={() => navigate(routes.SignUp)}>Sign up</Link>
						</LinkContainer>
					</SignInCardContent>
				</Card>
			</Flex>
		</PublicLayout>
	);
};

export default SignIn;
