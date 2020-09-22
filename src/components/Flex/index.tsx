import React from "react";

import { Container } from "./styles";
import { FlexProps } from "./types";

const Flex: React.FC<FlexProps> = ({ container = true, className, style, ...props }) => (
	<Container {...props} container={container} className={className} style={style} />
);

export default Flex;
