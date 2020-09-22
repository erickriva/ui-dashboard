import React, { useEffect } from "react";
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
import Button from "../../components/Button";

import Card from "../../components/Card";
import Flex from "../../components/Flex";
import TextInput from "../../components/Input/TextInput";
import DefaultLayout from "../../layouts/DefaultLayout";

import {
	AllConversationsTitle,
	ConversationHeader,
	ContactData,
	Avatar,
	ContactNameContainer,
	ContactStatus,
	ContactName,
	ContactIcons,
	IconButton,
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
	useEffect(() => {
		animateScroll.scrollToBottom({
			containerId: "conversation-messages"
		});
	}, []);

	return (
		<DefaultLayout>
			<Flex height="100%">
				<Flex flexDirection="column" gap={22} flex="0 0 30%" maxHeight="100vh" style={{ overflowY: "hidden" }}>
					<AllConversationsHeader>
						<AllConversationsTitle>All Conversations</AllConversationsTitle>
						<TextInput icon={<Search />} placeholder="Search Conversations" />
					</AllConversationsHeader>
					<ConversationCards>
						{[...Array(5)].map((item, index) => (
							<ConversationCard key={uuid()} isActive={index === 0}>
								<Avatar>JM</Avatar>
								<ConversationCardContent>
									<ContactNameAndDateContainer>
										<ContactName>Julia Miglar</ContactName>
										<MessageDate>7 days ago</MessageDate>
									</ContactNameAndDateContainer>
									<ContactMessage>
										Numerology. Chaldean Numerology. The numerical value of dummy message in
										Chaldean Numerology is...
									</ContactMessage>
								</ConversationCardContent>
							</ConversationCard>
						))}
					</ConversationCards>
				</Flex>

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
								<IconButton icon={<Search />} />
								<IconButton icon={<Folder />} />
								<IconButton icon={<ThreeDotsVertical />} />
							</ContactIcons>
						</ConversationHeader>

						<ConversationMessagesContainer id="conversation-messages">
							<ConversationMessages>
								<OtherPersonMessageContainer>
									<OtherPersonMessage>
										<OtherPersonMessageContent>
											I bought the product yesterday, but having problems to turn it on. The blue
											lights are on but nothing happens when the machine is activated
										</OtherPersonMessageContent>
										<OtherPersonMessageDate>5 days ago</OtherPersonMessageDate>
									</OtherPersonMessage>
									<OtherPersonIcons>
										<SendAttachmentButton icon={<ThreeDots />} />
										<SendAttachmentButton icon={<Reply />} />
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
										<SendAttachmentButton icon={<ThreeDots />} />
										<SendAttachmentButton icon={<Reply />} />
									</OtherPersonIcons>
								</OtherPersonMessageContainer>

								<MyMessageContainer>
									<MyMessageContent>Thank you, let me send it to our Technician.</MyMessageContent>
									<MyMessageDate>Today</MyMessageDate>
								</MyMessageContainer>
							</ConversationMessages>
						</ConversationMessagesContainer>

						<SendMessageContainer>
							<Flex gap={2}>
								<SendAttachmentButton icon={<Paperclip />} />
								<SendAttachmentButton icon={<Image />} />
							</Flex>

							<SendMessageInput placeholder="Write your message" />
							<SendMessageButton icon={<CursorFill />} />
						</SendMessageContainer>
					</ConversationContent>
				</Card>
			</Flex>
		</DefaultLayout>
	);
};

export default Chats;
