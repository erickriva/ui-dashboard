import styled from "styled-components";
import OnHoverScrollbar from "../../components/OnHoverScrollbar";
import { lightenOrDarkenColor } from "../../utils/colors";

export const Container = styled(OnHoverScrollbar)`
	padding: 8px 0;
`;

export const ListItem = styled.div`
	display: flex;
	color: ${props => props.theme.colors.textDark};
	transition: all 0.2s;
	margin: 0 12px;
	padding: 12px;
	cursor: pointer;
	border-radius: 4px;
	gap: 16px;

	&:hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}
`;

export const Picture = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	flex-grow: 0;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${props => props.theme.commonColors.gray};
	color: #ffffff;
`;

export const Notification = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	min-height: 40px;
`;

export const NotificationContent = styled.div`
	font-size: 1.5rem;
`;

export const NotificationDate = styled.div`
	font-size: 1.4rem;
	color: ${props => props.theme.commonColors.gray};
`;
