import React, { useEffect, useState } from "react";

import Flex from "../../components/Flex";
import Card from "../../components/Card";
import Form from "../../components/Form";

import {
	ConversationHeader,
	ContactData,
	Avatar,
	ContactNameContainer,
	ContactStatus,
	ContactName,
	ContactIcons,
	HeaderIconButton,
	ConversationMessages as StyledConversationMessages,
	OtherPersonMessageContainer,
	OtherPersonMessage,
	OtherPersonMessageContent,
	OtherPersonIcons,
	OtherPersonMessageDate,
	MyMessageContainer,
	MyMessageContent,
	MyMessageDate,
	DateSeparator,
	DateSaparatorDescription,
	FileData,
	FileName,
	FileSize,
	FileDownload,
	SendMessageContainer,
	SendMessageInput,
	SendMessageButton,
	ConversationContent,
	ConversationMessagesContainer,
	SendAttachmentButton
} from "./styles";

import {
	CursorFill,
	Download,
	Folder,
	Image,
	Paperclip,
	Reply,
	Search,
	ThreeDots,
	ThreeDotsVertical
} from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { FakeConversation, fakeConversations } from "../../data/conversations";
import { MyTextMessage, OtherAttachmentMessage, OtherTextMessage, MyAttachmentMessage } from "./MessageComponents";

const ConversationMessages: React.FC = () => {
	const { conversationId } = useParams();
	const [conversation, setConversation] = useState<FakeConversation>();

	useEffect(() => {
		setConversation(fakeConversations.find(item => item.id === Number(conversationId)));
	}, [conversationId]);

	return (
		<Card>
			<ConversationContent flex={2} flexDirection="column" maxHeight="100vh" gap={0}>
				<ConversationHeader>
					<ContactData>
						<Avatar>{conversation?.user.initials}</Avatar>
						<ContactNameContainer>
							<ContactName>{conversation?.user.name}</ContactName>
							<ContactStatus>Active</ContactStatus>
						</ContactNameContainer>
					</ContactData>

					<ContactIcons>
						<HeaderIconButton visualType="accent">
							<Search />
						</HeaderIconButton>
						<HeaderIconButton visualType="accent">
							<Folder />
						</HeaderIconButton>
						<HeaderIconButton visualType="accent">
							<ThreeDotsVertical />
						</HeaderIconButton>
					</ContactIcons>
				</ConversationHeader>

				<ConversationMessagesContainer id="conversation-messages">
					<StyledConversationMessages>
						{conversation?.messages.map(message => {
							if (typeof message.content === "string") {
								if (message.mine) return <MyTextMessage message={message} />;
								return <OtherTextMessage message={message} />;
							}

							if (message.mine) return <MyAttachmentMessage message={message} />;
							return <OtherAttachmentMessage message={message} />;
						})}

						{/* <DateSeparator>
							<DateSaparatorDescription>Today</DateSaparatorDescription>
						</DateSeparator> */}
					</StyledConversationMessages>
				</ConversationMessagesContainer>

				<SendMessageContainer>
					<Flex gap={2}>
						<SendAttachmentButton>
							<Paperclip />
						</SendAttachmentButton>
						<SendAttachmentButton>
							<Image />
						</SendAttachmentButton>
					</Flex>

					<Form>
						<SendMessageInput placeholder="Write your message" />
						<SendMessageButton>
							<CursorFill />
						</SendMessageButton>
					</Form>
				</SendMessageContainer>
			</ConversationContent>
		</Card>
	);
};

export default ConversationMessages;
