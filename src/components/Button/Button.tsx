import React from "react";
import classnames from "classnames";
import { ArrowRepeat } from "react-bootstrap-icons";

import { Container, LoadingIcon, Content } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
	className,
	outline,
	disabled,
	isLoading,
	children,
	visualType = "default",
	...props
}) => {
	const buttonClassName = classnames(className, {
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

			<Content>{children}</Content>
		</Container>
	);
};

export default Button;
