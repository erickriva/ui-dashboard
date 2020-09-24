import React from "react";

import classnames from "classnames";

import { Container, LoadingIcon, Content } from "./styles";
import { IconButtonProps } from "./types";
import { ArrowRepeat } from "react-bootstrap-icons";

const IconButton: React.FC<IconButtonProps> = ({
	className,
	outline,
	disabled,
	isLoading,
	children,
	visualType = "default",
	...props
}) => {
	const buttonClassName = classnames(className, {
		onlyIcon: true,
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

export default IconButton;
