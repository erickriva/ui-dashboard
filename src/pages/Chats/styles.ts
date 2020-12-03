import styled from "styled-components";
import { IconButton } from "../../components/Button";
import Card from "../../components/Card";
import Flex from "../../components/Flex";
import OnHoverScrollbar from "../../components/OnHoverScrollbar";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";

export const SelectConversation = styled.div`
	padding: 32px;
	font-size: 1.8rem;
`;

export const Conversations = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	gap: 16px;
	max-height: 100vh;
	overflow-y: hidden;
`;

export const AllConversationsHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const ConversationCards = styled(OnHoverScrollbar)`
	display: flex;
	flex-direction: column;
	gap: 6px;

	height: 100%;
	overflow-x: hidden !important;
`;

export const ConversationCard = styled(Card)`
	gap: 16px;
	cursor: pointer;
	flex-direction: row;
	flex: 0;
`;

export const ConversationCardContent = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 8px;
`;

export const ContactMessage = styled.div`
	color: #999999;
	font-size: 1.4rem;
`;

export const ContactNameAndDateContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const MessageDate = styled.div`
	color: #666666;
	font-size: 1.4rem;
`;

export const Avatar = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #999;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	flex-grow: 0;
`;

export const ContactName = styled.div`
	font-weight: bold;
	color: ${props => props.theme.colors.textDark};
`;
