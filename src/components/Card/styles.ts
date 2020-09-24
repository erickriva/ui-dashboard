import styled from "styled-components";
import { hex2rgba } from "../../utils/colors";

export const Container = styled.div`
	padding: 16px;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.accent};
	border: 2px solid ${props => props.theme.colors.border};
	box-shadow: 0px 0px 10px -1px ${props => hex2rgba(props.theme.colors.border, 0.4)};
	position: relative;
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	&.active::before {
		position: absolute;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		width: 4px;
		height: 100%;
		left: 0;
		top: 0;
		background-color: ${props => props.theme.colors.default};
		content: "";
	}
`;
