import React from "react";

import classnames from "classnames";

import { StyledContainer } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ className, children, isActive, visualType = "default", ...props }) => {
	const CardClassName = classnames(className, {
		active: isActive
	});
	return (
		<StyledContainer {...props} className={CardClassName} visualType={visualType}>
			{children}
		</StyledContainer>
	);
};

export default Card;
