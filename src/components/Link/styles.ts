import styled from "styled-components";
import { lightenOrDarkenColor } from "../../utils/colors";

export const Container = styled.button`
	background-color: transparent;
	color: ${props => lightenOrDarkenColor(props.theme.colors.default, 30)};
	cursor: pointer;
	font-size: 1.6rem;
	transition: all 0.2s;

	&:hover {
		color: ${props => lightenOrDarkenColor(props.theme.colors.default, 60)};
	}
`;
