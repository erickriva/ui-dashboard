import React from "react";

import classnames from "classnames";

import { Container, LoadingIcon, Content, Label } from "./styles";
import { ButtonProps } from "./types";
import { ArrowRepeat } from "react-bootstrap-icons";

const Button: React.FC<ButtonProps> = ({
	className,
	outline,
	icon,
	disabled,
	isLoading,
	children,
	visualType = "default",
	...props
}) => {
	const buttonClassName = classnames(className, {
		onlyIcon: icon && !children,
		outline
	});

	return (
		<Container
			{...props}
			className={buttonClassName}
			visualType={visualType}
			disabled={isLoading || disabled}
			isLoading={isLoading}>
			<LoadingIcon>
				<ArrowRepeat />
			</LoadingIcon>

			<Content>
				{icon}
				{children && <Label>{children}</Label>}
			</Content>
		</Container>
	);
};

export default Button;
