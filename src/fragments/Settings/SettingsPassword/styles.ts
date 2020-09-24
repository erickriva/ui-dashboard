import styled from "styled-components";
import { lightenOrDarkenColor } from "../../../utils/colors";

export const NewPasswordContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const NewPasswordHintContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 0 40%;
`;

export const NewPasswordHint = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
	/* border-radius: 4px; */
	/* background-color: ${props => lightenOrDarkenColor(props.theme.colors.warning, 30)}; */
	/* border: 2px solid ${props => props.theme.colors.warning}; */
	/* color: ${props => props.theme.commonColors.textDark}; */
`;

export const NewPasswordHintTitle = styled.div`
	font-weight: bold;
`;

export const NewPasswordHintItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const NewPasswordHintItem = styled.div`
	font-size: 1.5rem;
`;
