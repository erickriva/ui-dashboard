import styled from "styled-components";
import { lightenOrDarkenColor } from "../../utils/colors";

export const SettingActiveIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SettingContent = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const SettingTitle = styled.div``;

export const SettingSubtitle = styled.div`
	font-size: 1.2rem;
`;

export const SettingTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Setting = styled.div`
	display: flex;
	padding: 12px 16px;
	border-radius: 4px;
	cursor: pointer;
	justify-content: space-between;
	transition: all 0.2s;

	&:not(.active):hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}

	&.active {
		color: #ffffff;
		background-color: ${props => props.theme.colors.default};
		/* background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)}; */
	}
`;
