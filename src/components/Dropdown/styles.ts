import styled from "styled-components";
import { lightenOrDarkenColor } from "../../utils/colors";

export const Container = styled.div`
	position: relative;
`;

export const Title = styled.div`
	font-size: 1.4rem;
	color: ${props => props.theme.colors.textDark};
	font-weight: bold;
`;

export const Content = styled.div``;

export const DropdownContent = styled.div`
	margin: 0 -16px -16px;
`;

export const Dropdown = styled.div`
	padding: 16px;
`;

export const Menu = styled.div`
	position: absolute;
	background-color: ${props => props.theme.colors.accent};
	z-index: 999;
	box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;

	&.small {
		width: 200px;
	}

	&.medium {
		width: 350px;
	}
`;

export const MenuOption = styled.div`
	transition: background-color 0.2s;
	cursor: pointer;
	font-size: 1.3rem;
	margin: 0 12px;
	padding: 8px;
	color: ${props => props.theme.colors.textDark};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2px;
	border-radius: 4px;

	&:hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}
`;

export const Separator = styled.div`
	border-bottom: 1px solid ${props => props.theme.colors.border};
	margin: 16px -16px 0;
`;
