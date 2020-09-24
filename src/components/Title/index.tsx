import React from "react";

import { StyledTitleContainer, StyledTitle, StyledSubtitle } from "./styles";

interface TitleProps {
	title: string;
	subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
	return (
		<StyledTitleContainer>
			<StyledTitle>{title}</StyledTitle>
			{subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
		</StyledTitleContainer>
	);
};

export default Title;
