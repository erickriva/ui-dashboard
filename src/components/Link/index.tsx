import React from "react";

import { Container } from "./styles";
import { LinkProps } from "./types";

const Link: React.FC<LinkProps> = ({ ...props }) => {
	return <Container {...props} />;
};

export default Link;
