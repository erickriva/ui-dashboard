import styled from "styled-components";

export const StyledTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

export const StyledTitle = styled.div`
	font-size: 2.2rem;
`;

export const StyledSubtitle = styled.div`
	color: ${props => props.theme.commonColors.gray};
`;
