import styled from "styled-components";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import OnHoverScrollbar from "../../components/OnHoverScrollbar";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";

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

export const AllConversationsTitle = styled.div`
	font-size: 2.2rem;
`;

export const ConversationCards = styled(OnHoverScrollbar)`
	display: flex;
	flex-direction: column;
	gap: 12px;

	height: 100%;
	overflow-x: hidden !important;
`;

export const ConversationCard = styled.div`
	gap: 16px;
	cursor: pointer;
	position: relative;
	display: flex;
`;

export const ConversationCardContent = styled.div`
	display: flex;
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

/* CONVERSATION CONTENT */

export const ConversationContent = styled(Flex)`
	border: 1px solid ${props => props.theme.colors.border};
	border-radius: 4px;
	overflow-y: hidden;
	background-color: ${props => props.theme.colors.accent};
`;

export const ConversationHeader = styled.div`
	background-color: ${props => props.theme.colors.background};
	padding: 16px;
	border-bottom: 1px solid ${props => props.theme.colors.border};

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContactData = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
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

export const ContactNameContainer = styled.div``;

export const ContactName = styled.div`
	font-weight: bold;
	color: ${props => props.theme.colors.textDark};
`;

export const ContactStatus = styled.div`
	font-size: 1.3rem;
	color: #999999;
`;

export const ContactIcons = styled.div`
	display: flex;
	gap: 8px;
`;

export const IconButton = styled(Button)`
	background-color: ${props => props.theme.colors.accent};

	&:hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}

	& svg {
		color: ${props => props.theme.colors.textDark};
	}
`;

export const ConversationMessagesContainer = styled(OnHoverScrollbar)`
	overflow-x: hidden !important;
	height: 100%;
`;

export const ConversationMessages = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	background-color: ${props => props.theme.colors.accent};
	padding: 20px 0;
`;

export const OtherPersonMessageContainer = styled.div`
	width: fit-content;
	max-width: 80%;
	display: flex;
	justify-content: center;
	/* align-items: center; */

	padding: 0 30px;
	gap: 20px;
`;

export const OtherPersonMessage = styled.div`
	display: flex;
	gap: 4px;
	flex-direction: column;
`;

export const OtherPersonMessageContent = styled.div`
	background-color: ${props => props.theme.colors.default};
	color: #ffffff;
	border-radius: 4px;
	padding: 12px 16px;
	font-size: 1.5rem;
	overflow: hidden;
`;

export const OtherPersonIcons = styled.div`
	display: flex;
	gap: 2px;
	align-items: center;

	& svg {
		color: ${props => props.theme.colors.textDark};
	}
`;

export const OtherPersonMessageDate = styled.div`
	display: flex;
	justify-content: flex-end;
	color: #888888;
	font-size: 1.4rem;
`;

export const MyMessageContainer = styled.div`
	width: fit-content;
	max-width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-self: flex-end;
	gap: 4px;
	padding: 0 30px;
`;

export const MyMessageContent = styled.div`
	background-color: ${props => props.theme.colors.border};
	color: ${props => props.theme.colors.textDark};
	border-radius: 4px;
	padding: 12px 16px;
	font-size: 1.5rem;
	border: 1px solid ${props => props.theme.colors.border};
	overflow: hidden;
`;

export const MyMessageDate = styled.div`
	display: flex;
	justify-content: flex-end;
	color: #888888;
	font-size: 1.4rem;
`;

export const DateSeparator = styled.div`
	border-bottom: 1px solid #888888;
	position: relative;
	margin: 10px 30px;
`;

export const DateSaparatorDescription = styled.div`
	background-color: ${props => props.theme.colors.accent};
	padding: 0 16px;
	position: absolute;
	top: -8px;
	left: 50%;
	transform: translateX(-50%);
	margin: auto;
	font-size: 1.4rem;
	color: #888888;
`;

export const FileData = styled.div`
	background-color: ${props => props.theme.colors.background};
	margin-top: -12px;
	margin-left: -16px;
	margin-right: -16px;
	margin-bottom: -2px;
	width: 250px;
	padding: 16px;
`;

export const FileName = styled.div`
	font-weight: bold;
	color: ${props => props.theme.colors.textDark};
`;

export const FileSize = styled.div`
	font-size: 1.4rem;
	color: ${props => props.theme.colors.textDark};
`;

export const FileDownload = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	margin-bottom: -15px;
	margin-left: -15px;
	margin-right: -15px;
	cursor: pointer;

	& > svg {
		width: 18px;
		height: 18px;
	}
`;

export const SendMessageContainer = styled.div`
	background-color: transparent;
	display: flex;
	gap: 2px;
	height: 70px;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #888888;
`;

export const SendMessageInput = styled.input`
	flex: 1;
	padding: 10px 16px;
	border-radius: 4px;
	height: 100%;
	background-color: ${props => props.theme.colors.accent};
	color: ${props => props.theme.colors.textDark};
`;

export const SendMessageButton = styled(Button)`
	& svg {
		color: #ffffff;
	}
`;

export const SendAttachmentButton = styled(Button)`
	background-color: transparent;

	&:hover {
		background-color: ${props => props.theme.colors.border};
	}

	& svg {
		width: 20px;
		height: 20px;
		color: #888888;
	}
`;