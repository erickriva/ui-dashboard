import styled from "styled-components";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";

export const StyledRightContent = styled.div`
	flex: 1 1 auto;
	display: flex;
	gap: 16px;
	justify-content: flex-end;
	align-items: center;
`;

export const StyledPagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 12px;
	gap: 32px;
`;

export const StyledPaginationActivePage = styled.div``;

export const StyledPaginationButtons = styled.div`
	display: flex;
	gap: 2px;
`;

export const StyledPaginationButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	cursor: pointer;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.accent};
	box-shadow: 0px 0px 10px -1px ${props => hex2rgba(props.theme.colors.border, 0.2)};
	color: ${props => props.theme.colors.textDark};

	&:not(.active):hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}

	&.active {
		color: ${props => props.theme.commonColors.textLight};
		background-color: ${props => props.theme.colors.default};
	}

	&:disabled {
		background-color: ${props => props.theme.colors.border} !important;
		color: ${props => props.theme.commonColors.gray};
	}
`;
