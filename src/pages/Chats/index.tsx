import React, { useEffect, useState } from "react";
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
import { animateScroll } from "react-scroll";
import { v4 as uuid } from "uuid";

import Card from "../../components/Card";
import Flex from "../../components/Flex";
import Form from "../../components/Form";
import TextInput from "../../components/Input/TextInput";
import Title from "../../components/Title";
import DefaultLayout from "../../layouts/DefaultLayout";

import {
	AllConversationsTitle,
	SelectConversation,
	ConversationHeader,
	ContactData,
	Avatar,
	ContactNameContainer,
	ContactStatus,
	ContactName,
	ContactIcons,
	HeaderIconButton,
	ContactMessage,
	ConversationCard,
	ConversationCardContent,
	ConversationCards,
	ContactNameAndDateContainer,
	MessageDate,
	ConversationMessages,
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
	SendAttachmentButton,
	AllConversationsHeader
} from "./styles";

const Chats: React.FC = () => {
	const [selectedConversationId, setSelectedConversationId] = useState(0);

	const [conversations, setConversations] = useState([
		{
			id: 1,
			user: { initials: "JM", name: "Julia Miglar" },
			date: "7 days ago",
			content: `Numerology. Chaldean Numerology. The numerical value of dummy message in
		Chaldean Numerology is...`
		},
		{
			id: 2,
			user: { initials: "ER", name: "Erick Riva" },
			date: "10 days ago",
			content: `Hello buddy`
		}
	]);

	useEffect(() => {
		setSelectedConversationId(conversations[0]?.id ?? 0);
	}, [conversations]);

	useEffect(() => {
		animateScroll.scrollToBottom({
			containerId: "conversation-messages"
		});
	}, [selectedConversationId]);

	return (
		<DefaultLayout>
			<Flex height="100%">
				<Flex flexDirection="column" gap={22} flex="0 0 30%" maxHeight="100vh" style={{ overflowY: "hidden" }}>
					<AllConversationsHeader>
						<Title title="All Conversations" />
						<TextInput icon={<Search />} placeholder="Search Conversations" />
					</AllConversationsHeader>
					<ConversationCards>
						{conversations.map((item, index) => (
							<ConversationCard
								key={item.id}
								isActive={selectedConversationId === item.id}
								onClick={() => setSelectedConversationId(item.id)}>
								<Avatar>{item.user.initials}</Avatar>
								<ConversationCardContent>
									<ContactNameAndDateContainer>
										<ContactName>{item.user.name}</ContactName>
										<MessageDate>{item.date}</MessageDate>
									</ContactNameAndDateContainer>
									<ContactMessage>{item.content}</ContactMessage>
								</ConversationCardContent>
							</ConversationCard>
						))}
					</ConversationCards>
				</Flex>

				{!selectedConversationId ? (
					<SelectConversation>Select a conversation...</SelectConversation>
				) : (
					<Card>
						<ConversationContent flex={2} flexDirection="column" maxHeight="100vh" gap={0}>
							<ConversationHeader>
								<ContactData>
									<Avatar>JM</Avatar>
									<ContactNameContainer>
										<ContactName>Julia Miglar</ContactName>
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
								<ConversationMessages>
									<OtherPersonMessageContainer>
										<OtherPersonMessage>
											<OtherPersonMessageContent>
												I bought the product yesterday, but having problems to turn it on. The
												blue lights are on but nothing happens when the machine is activated
											</OtherPersonMessageContent>
											<OtherPersonMessageDate>5 days ago</OtherPersonMessageDate>
										</OtherPersonMessage>
										<OtherPersonIcons>
											<SendAttachmentButton>
												<ThreeDots />
											</SendAttachmentButton>
											<SendAttachmentButton>
												<Reply />
											</SendAttachmentButton>
										</OtherPersonIcons>
									</OtherPersonMessageContainer>

									<MyMessageContainer>
										<MyMessageContent>Hello Julia</MyMessageContent>
									</MyMessageContainer>

									<MyMessageContainer>
										<MyMessageContent>OK, can you send me a picture?</MyMessageContent>
										<MyMessageDate>5 days ago</MyMessageDate>
									</MyMessageContainer>

									<DateSeparator>
										<DateSaparatorDescription>Today</DateSaparatorDescription>
									</DateSeparator>

									<OtherPersonMessageContainer>
										<OtherPersonMessage>
											<OtherPersonMessageContent>
												<FileData>
													<FileName>Photo - Broken.jpg</FileName>
													<FileSize>1,3 MB</FileSize>
												</FileData>
												<FileDownload>
													Download <Download />
												</FileDownload>
											</OtherPersonMessageContent>
											<OtherPersonMessageDate>2 minutes ago</OtherPersonMessageDate>
										</OtherPersonMessage>
										<OtherPersonIcons>
											<SendAttachmentButton>
												<ThreeDots />
											</SendAttachmentButton>
											<SendAttachmentButton>
												<Reply />
											</SendAttachmentButton>
										</OtherPersonIcons>
									</OtherPersonMessageContainer>

									<MyMessageContainer>
										<MyMessageContent>
											Thank you, let me send it to our Technician.
										</MyMessageContent>
										<MyMessageDate>Today</MyMessageDate>
									</MyMessageContainer>
								</ConversationMessages>
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
				)}
			</Flex>
		</DefaultLayout>
	);
};

export default Chats;
