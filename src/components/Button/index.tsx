import React from "react";

import classnames from "classnames";

import { Container, LoadingIcon, Content } from "./styles";
import { ButtonProps } from "./types";
import { ArrowRepeat } from "react-bootstrap-icons";

const Button: React.FC<ButtonProps> = ({ className, icon, isLoading, children, visualType = "default", ...props }) => {
	const buttonClassName = classnames(className, {
		onlyIcon: icon && !children
	});

	return (
		<Container
			{...props}
			className={buttonClassName}
			visualType={visualType}
			disabled={isLoading}
			isLoading={isLoading}>
			<LoadingIcon>
				<ArrowRepeat />
			</LoadingIcon>

			<Content>
				{icon}
				{children}
			</Content>
		</Container>
	);
};

export default Button;
