import React from "react";

import classnames from "classnames";

import { Container } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ className, children, isActive }) => {
	const CardClassName = classnames(className, {
		active: isActive
	});
	return <Container className={CardClassName}>{children}</Container>;
};

export default Card;
