import styled from "styled-components";
import { StyledTextInputContainer } from "../Input/styles";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	font-size: 1.4rem;

	& ${StyledTextInputContainer} {
		background-color: ${props => props.theme.colors.background};
	}
`;

export const Label = styled.label`
	color: ${props => props.theme.colors.textDark};
`;
